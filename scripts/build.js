const path = require('path')
const { buildSync } = require('esbuild')
const define = {}

for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

const options = {
  entryPoints: [
    path.join(__dirname, '..', 'src', 'mounts', 'panel.tsx'),
    path.join(__dirname, '..', 'src', 'mounts', 'config.tsx'),
  ],
  outdir: path.join(__dirname, '..', 'output'),
  bundle: true,
  define,
  logLevel: 'info',
  target: 'es2017',
}

buildSync(options)
