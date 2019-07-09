export default entry => {
    if (process.env.WEBPACK_DEV_SERVER) {
        entry.vendor = entry.vendor || []
        entry.vendor.push(require.resolve('webpack-dev-server-status-bar'))
    }
    return entry
}
