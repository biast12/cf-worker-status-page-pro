import { cls } from 'tagged-classnames-free'
import { useEffect, useRef, useState } from 'react'

import MonitorPanel from './components/MonitorPanel'

import type { IndexPageData } from './+data'

import { usePageContext } from '#src/renderer/usePageContext'
import { config } from '#src/config'
import { useMounted } from '#src/hooks/mounted'

const themes = ['dark', 'light']

export default function Page() {
  const { data: { allMonitors, kvData, filter } } = usePageContext<IndexPageData>()
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputFocused, setInputFocused] = useState(false)
  const [searchValue, setSearchValue] = useState(filter || '')
  const deferredSearch = useDeferredValue(searchValue)
  const { mounted } = useMounted()
  const [theme, setTheme] = useState(themes[0])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === '/' && !inputFocused) {
        event.stopPropagation()
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keyup', handler)

    return () => {
      window.removeEventListener('keyup', handler)
    }
  }, [inputFocused])

  useEffect(() => {
    const url = new URL(window.location.href)
    if (deferredSearch.trim()) {
      url.searchParams.set('filter', deferredSearch)
      history.replaceState(null, '', url)
    } else {
      url.searchParams.delete('filter')
      history.replaceState(null, '', url)
    }
  }, [deferredSearch])

  useEffect(() => {
    document.body.classList.remove(...themes)
    document.body.classList.add(theme)
  }, [theme])

  if (config.settings.csr === true && !mounted) {
    return null
  }

  return (
    <div className='container max-w-screen-xl pt-4'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={`/${config.settings.logo || 'logo.svg'}`} className='size-10' />
          <h1 className='text-3xl'>{config.settings.title}</h1>
        </div>
        <div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className='rounded border p-2'
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main>
        <MonitorPanel
          allMonitors={allMonitors}
          data={kvData}
          className={cls`mt-4`}
          search={deferredSearch}
        />
      </main>
      <footer className='my-4 flex justify-between'>
        <span>
          Powered by
          {' '}
          <a href='https://workers.cloudflare.com/' target='_blank' rel='noreferrer'>
            Cloudflare Workers
          </a>
          {' '}
          &
          {' '}
          <a href='https://twitter.com/Biast12/' target='_blank' rel='noreferrer'>
            Biast12
          </a>
        </span>
        <a
          href='https://github.com/biast12/cf-worker-status-page-pro'
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-1'
        >
          Source code
        </a>
      </footer>
    </div>
  )
}
