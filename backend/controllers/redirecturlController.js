const Url = require('../model/urlModel')
const validUrl = require('valid-url')
const shortid = require('shortid')

exports.redirectUrl = async (req, res) => {
    const { shorturl } = req.params;
    const shortCode = shorturl.split('/').pop();

    try {
        const url = await Url.findOne({ shorturl: `http://localhost:3500/url/${shortCode}` });

        if (!url) {
            return res.status(404).json({ error: 'Url not found!' });
        }

        url.clicks += 1;
        await url.save();

        return res.json({ originalurl: url.originalurl });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};
