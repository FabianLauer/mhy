import mhyWP from '@/configs/webpack'

export default (baseConfig, env, defaultConfig) => {
    mhyWP.resolve.modules = [...defaultConfig.resolve.modules, ...mhyWP.resolve.modules]
    mhyWP.resolve.alias = {
        ...mhyWP.resolve.alias,
        ...defaultConfig.resolve.alias
    }
    defaultConfig.resolve = mhyWP.resolve
    defaultConfig.module = mhyWP.module

    return defaultConfig
}
