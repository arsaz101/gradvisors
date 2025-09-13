declare module '*.svg?url' {
  const src: string
  export default src
}

declare module '*.svg?component' {
  import * as React from 'react'
  const Component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  export const ReactComponent: typeof Component
  export default Component
}

declare module '*.svg?react' {
  import * as React from 'react'
  const Component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  export default Component
}

declare module '*.svg' {
  import * as React from 'react'
  const Component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  export const ReactComponent: typeof Component
  export default Component
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
