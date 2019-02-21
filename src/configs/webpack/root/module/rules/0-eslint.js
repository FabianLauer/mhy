import path from 'path'
import fs from 'fs'

const getRules = rules => {
    const configFile = path.resolve(__dirname, '.eslintrc')
    if (!fs.existsSync(configFile)) {
        require('@/configs/eslint/write')(__dirname)
    }

    return [
        ...rules,
        {
            enforce: 'pre',
            test: /\.[jt]sx?$/,
            loader: require.resolve('eslint-loader'),
            include: /src/,
            exclude: /node_modules|dist|build/,
            options: { configFile }
        }
    ]
}

export default getRules
