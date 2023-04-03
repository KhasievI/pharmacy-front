import React from 'react'

const Header = () => {
  return (
    <div>
      <div class="z-50 sticky top-0">
        <nav class="duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pr-5 lg:pl-4 z-50">
          <div class="h-16 w-full gap-0 sm:gap-3 flex items-center justify-between">
            <div class="3xl:flex-1 flex flex-row ">
              <button type="button" aria-label="Menu" class="active:scale-95 transition-transform flex lg:hidden w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link">
                <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              <div class="3xl:flex-1 flex align-center">
                <a class="active:scale-95 overflow-hidden transition-transform relative items-center text-primary dark:text-primary-dark p-1 whitespace-nowrap outline-link rounded-full 3xl:rounded-xl inline-flex text-lg font-normal gap-2" href="/">
                  <span class="sr-only 3xl:not-sr-only">React</span>
                </a>
              </div>
            </div>
            <div class="hidden md:flex flex-1 justify-center items-center w-full 3xl:w-auto 3xl:shrink-0 3xl:justify-center">
              <button type="button" class="flex 3xl:w-[56rem] 3xl:mx-0 relative pl-4 pr-1 py-1 h-10 bg-gray-30/20 dark:bg-gray-40/20 outline-none focus:outline-link betterhover:hover:bg-opacity-80 pointer items-center text-left w-full text-gray-30 rounded-full align-middle text-base">
                <svg width="1em" height="1em" viewBox="0 0 20 20" class="mr-3 align-middle text-gray-30 shrink-0 group-betterhover:hover:text-gray-70">
                  <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" stroke-width="2" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </svg>
                Search
                <span class="ml-auto hidden sm:flex item-center mr-1">
                  <kbd class="w-5 h-5 border border-transparent mr-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md" data-platform="mac">⌘
                  </kbd>
                  <kbd class="w-10 h-5 border border-transparent mr-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md" data-platform="win">Ctrl
                  </kbd>
                  <kbd class="w-5 h-5 border border-transparent mr-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md">K
                  </kbd>
                </span>
              </button>
            </div>
            <div class="text-base justify-center items-center gap-1.5 flex 3xl:flex-1 flex-row 3xl:justify-end">
              <div class="mx-2.5 gap-1.5 hidden lg:flex">
                <div class="flex flex-auto sm:flex-1">
                  <a class="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-primary/5 hover:dark:bg-primary-dark/5" href="/learn">Learn
                  </a>
                </div>
                <div class="flex flex-auto sm:flex-1">
                  <a class="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-primary/5 hover:dark:bg-primary-dark/5" href="/reference/react">
                  Reference
                  </a>
                </div>
                <div class="flex flex-auto sm:flex-1">
                  <a class="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-primary/5 hover:dark:bg-primary-dark/5" href="/community">
                  Community
                  </a>
                </div>
                <div class="flex flex-auto sm:flex-1">
                  <a class="active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize hover:bg-primary/5 hover:dark:bg-primary-dark/5" href="/blog">
                  Blog
                  </a>
                </div>
              </div>
              <div class="flex w-full md:hidden">
              </div>
              <div class="flex items-center -space-x-2.5 xs:space-x-0 ">
                <div class="flex md:hidden">
                  <button aria-label="Search" type="button" class="active:scale-95 transition-transform flex md:hidden w-12 h-12 rounded-full items-center justify-center hover:bg-secondary-button hover:dark:bg-secondary-button-dark outline-link">
                    <svg width="1em" height="1em" viewBox="0 0 20 20" class="align-middle w-5 h-5">
                      <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" stroke-width="2" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                      </path>
                    </svg>
                  </button>
                </div>
                <div class="flex dark:hidden">
                  <button type="button" aria-label="Use Dark Mode" class="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                      <g fill="none" fill-rule="evenodd" transform="translate(-440 -200)">
                        <path fill="currentColor" fill-rule="nonzero" stroke="currentColor" stroke-width="0.5" d="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z" transform="translate(354.5 192)">
                        </path>
                        <polygon points="444 228 468 228 468 204 444 204">
                        </polygon>
                      </g>
                    </svg>
                  </button>
                </div>
                <div class="hidden dark:flex">
                  <button type="button" aria-label="Use Light Mode" class="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                      <g fill="none" fill-rule="evenodd" transform="translate(-442 -200)">
                        <g fill="currentColor" transform="translate(356 144)">
                          <path d="M98.6123,60.1372 C98.6123,59.3552 98.8753,58.6427 99.3368,58.0942 C99.5293,57.8657 99.3933,57.5092 99.0943,57.5017 C99.0793,57.5012 99.0633,57.5007 99.0483,57.5007 C97.1578,57.4747 95.5418,59.0312 95.5008,60.9217 C95.4578,62.8907 97.0408,64.5002 98.9998,64.5002 C99.7793,64.5002 100.4983,64.2452 101.0798,63.8142 C101.3183,63.6372 101.2358,63.2627 100.9478,63.1897 C99.5923,62.8457 98.6123,61.6072 98.6123,60.1372" transform="translate(3 11)">
                          </path>
                        </g>
                        <polygon points="444 228 468 228 468 204 444 204">
                        </polygon>
                      </g>
                    </svg>
                  </button>
                </div>
                <div class="flex">
                  <a class="active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link" target="_blank" rel="noreferrer noopener" aria-label="Open on GitHub" href="https://github.com/facebook/react/releases">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                      </path>
                    </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
