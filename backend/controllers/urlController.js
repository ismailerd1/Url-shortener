const Url = require('../model/urlModel')
const validUrl = require('valid-url')
const shortid = require('shortid')


exports.shortenUrl = async (req, res) => {
    if (!req.body || !req.body.originalurl) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    const { originalurl } = req.body;
    const userId = req.user.id;

    if (!validUrl.isUri(originalurl)) {
        return res.status(400).json({ error: 'Invalid Url' });
    }

    const UrlCode = shortid.generate();

    const url = new Url({
        originalurl,
        shorturl: `http://localhost:3500/url/${UrlCode}`,
        userId
    });

    try {
        await url.save();
        return res.json({ New_url: url });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};



exports.getallUrls = async (req, res) => {
    const userId = req.user.id;
    
    if (!userId) {
        return res.status(401).json({ message: 'No user found.' });
    }

    try {
        const urls = await Url.find({ userId: userId });

        if (urls.length === 0) {
            return res.status(404).json({ message: 'No URLs found for this user.' });
        }

        const totalClicks = urls.reduce((acc, url) => acc + url.clicks, 0);

        const responsePayload = urls.map(url => ({
            originalurl: url.originalurl,
            shorturl: url.shorturl,
            clicks: url.clicks,
            date: url.date
        }));

        return res.status(200).json({
            urls: responsePayload,
            totalClicks
        });
    } catch(err) {
        return res.status(500).json({ error: 'Server error' });
    }
};


