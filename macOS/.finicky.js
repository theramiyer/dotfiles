module.exports = {
    defaultBrowser: "Firefox",      
    handlers: [
      {
        match: [
          /^https?:\/\/(.*\.)?google\.\w{2,}\/.*$/,
          /^https?:\/\/(.*\.)?gmail\.com\/.*$/,
          /^https?:\/\/(.*\.)?youtube\.com\/.*$/,
          /^https?:\/\/(.*\.)?youtu\.be\/.*$/,
          /^https?:\/\/(.*\.)?android.com\/.*$/,
          /^https?:\/\/(.*\.)?blogger\.com\/.*$/,
          /^https?:\/\/(.*\.)?feedburner\.com\/.*$/,
          /^https?:\/\/(.*\.)?google(analytics|-analytics|drive|earth|maps|mail|apps|apis|bot|commerce|syndication|usercontent)\.com\/.*$/
        ],
        browser: "Google Chrome"
      },
      {
        match: [
          /^https?:\/\/(.*\.)?amazon\.(com|in|co\.uk|ca|es|fr|de|it|co\.jp)\/.*$/,
          /^https?:\/\/(.*\.)?primevideo\.com\/.*$/
        ],
        browser: "Vivaldi"
      },
      {
        match: [
          /^https?:\/\/(.*\.)?facebook(careers|-dns|enterprise|-hardware|mail)?\.(com|net|co|com\.au|com\.mx|it)\/.*$/,
          /^https?:\/\/(.*\.)?instagram\.com\/.*$/,
          /^https?:\/\/(.*\.)?messenger\.com\/.*$/,
          /^https?:\/\/(.*\.)?accountkit\.com\/.*$/,
          /^https?:\/\/(.*\.)?fb\.(com|audio|gg|me|watch)\/.*$/,
          /^https?:\/\/(.*\.)?fb(cdn|e2e)\.com\/.*$/,
          /^https?:\/\/(.*\.)?fbinfra\.net\/.*$/,
          /^https?:\/\/(.*\.)?fbwat\.ch\/.*$/,
        ],
        browser: "Min"
      },
      {
        match: [
          /^https?:\/\/(.*\.)?microsoft\.com\/.*$/,
          /^https?:\/\/(.*\.)?office\.com\/.*$/,
          /^https?:\/\/(.*\.)?live\.com\/.*$/,
          /^https?:\/\/(.*\.)?onedrive\.com\/.*$/,
          /^https?:\/\/(.*\.)?outlook\.com\/.*$/,
        ],
        browser: "Microsoft Edge"
      },
      {
        match: [
          /^https?:\/\/(.*\.)?apple\.com\/.*$/,
          /^https?:\/\/(.*\.)?icloud\.com\/.*$/
        ],
        browser: "Safari"
      }
    ]
}