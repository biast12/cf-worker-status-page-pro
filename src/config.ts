import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'The Archive Status Page',
    url: 'https://status.biast12.site',
    displayDays: 30,
    collectResponseTimes: true,
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
      id: 'cloudflare.com',
      name: 'Cloudflare',
      url: 'https://cloudflare.com',
      description: 'Cloudflare provides a scalable, easy-to-use, unified control plane to deliver security, performance, and reliability for on-premises, hybrid, cloud, and SaaS applications.',
      followRedirect: false,
      method: 'GET',
      expectStatus: 200,
    },
  ],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
