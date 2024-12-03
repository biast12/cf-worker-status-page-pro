import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'The Archive - Status Page',
    url: 'https://status.biast12.site',
    displayDays: 30,
    collectResponseTimes: true,
    logo: 'archive_logo.svg',
  },
  monitors: [
    {
      id: 'biast12.site',
      name: 'The Archives',
      url: 'https://biast12.site',
      description: 'The Archives is a fan-run repository made by Biast12 with over 600+ GB of files and media from Respawns games.',
      followRedirect: true,
      method: 'GET',
      expectStatus: 200,
    },
    {
      id: 'biast12.info',
      name: 'The Apex Datamining Site',
      url: 'https://biast12.info',
      description: 'The information site for everything apex datamining related.',
      followRedirect: true,
      method: 'GET',
      expectStatus: 200,
    },
    {
      id: 'www.cloudflare.com',
      name: 'Cloudflare',
      url: 'https://www.cloudflare.com',
      description: 'Built for anything connected to the Internet.',
      followRedirect: false,
      method: 'GET',
      expectStatus: 200,
    },
  ],
}
