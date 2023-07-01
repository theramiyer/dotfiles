module.exports = {
    defaultBrowser: "Firefox",      
    handlers: [
      {
        match: [
          /^https:\/\/.*\.?google\.(com|in)\/?.*$/
        ],
        browser: "Google Chrome"
      },
      {
        match: [
          /^https?:\/\/.*\.?amazon\.(com|in|co\.uk|ca|es|fr|de|it|co\.jp)\/?.*$/,
          /^https?:\/\/.*\.?primevideo\.com\/?.*$/
        ],
        browser: "Vivaldi"
      },
      {
        match: [
          /^https?:\/\/.*\.?facebook(careers|-dns|enterprise|-hardware|mail)?\.(com|net|co|com\.au|com\.mx|it)\/?.*$/,
          /^https?:\/\/.*\.?instagram\.com\/?.*$/,
          /^https?:\/\/.*\.?messenger\.com\/?.*$/,
          /^https?:\/\/.*\.?accountkit\.com\/?.*$/,
          /^https?:\/\/.*\.?fb\.(com|audio|gg|me|watch)\/?.*$/,
          /^https?:\/\/.*\.?fb(cdn|e2e)\.com\/?.*$/,
          /^https?:\/\/.*\.?fbinfra\.net\/?.*$/,
          /^https?:\/\/.*\.?fbwat\.ch\/?.*$/,
        ],
        browser: "Min"
      },
      {
        match: [
          /^https?:\/\/.*\.?microsoft\.com\/?.*$/,
          /^https?:\/\/.*\.?office\.com\/?.*$/,
          /^https?:\/\/.*\.?live\.com\/?.*$/,
          /^https?:\/\/.*\.?onedrive\.com\/?.*$/,
          /^https?:\/\/.*\.?outlook\.com\/?.*$/,
        ],
        browser: "Microsoft Edge"
      },
      {
        match: [
          /^https?:\/\/.*\.?apple\.com\/?.*$/,
          /^https?:\/\/.*\.?icloud\.com\/?.*$/
        ],
        browser: "Safari"
      },
      {
        match: /^https?:\/\/.*\.?netflix\.com\/?.*$/,
        browser: {
          name: "Brave Browser",
          profile: "Netflix"
        }
      },
      {
        match: /^https?:\/\/.*\.?medium\.com\/?.*$/,
        browser: {
          name: "Brave Browser",
          profile: "Medium"
        }
      }
    ]
}