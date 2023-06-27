export function EditInactiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  )
}

export function EditActiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  )
}

export function DuplicateInactiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 4H12V12H4V4Z'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path
        d='M8 8H16V16H8V8Z'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  )
}

export function DuplicateActiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 4H12V12H4V4Z'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path
        d='M8 8H16V16H8V8Z'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  )
}

export function ArchiveInactiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='8'
        width='10'
        height='8'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <rect
        x='4'
        y='4'
        width='12'
        height='4'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  )
}

export function ArchiveActiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='8'
        width='10'
        height='8'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <rect
        x='4'
        y='4'
        width='12'
        height='4'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  )
}

export function MoveInactiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10 4H16V10' stroke='#A78BFA' strokeWidth='2' />
      <path d='M16 4L8 12' stroke='#A78BFA' strokeWidth='2' />
      <path d='M8 6H4V16H14V12' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  )
}

export function MoveActiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10 4H16V10' stroke='#C4B5FD' strokeWidth='2' />
      <path d='M16 4L8 12' stroke='#C4B5FD' strokeWidth='2' />
      <path d='M8 6H4V16H14V12' stroke='#C4B5FD' strokeWidth='2' />
    </svg>
  )
}

export function DeleteInactiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='6'
        width='10'
        height='10'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path d='M3 6H17' stroke='#A78BFA' strokeWidth='2' />
      <path d='M8 6V4H12V6' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  )
}

export function DeleteActiveIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='6'
        width='10'
        height='10'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path d='M3 6H17' stroke='#C4B5FD' strokeWidth='2' />
      <path d='M8 6V4H12V6' stroke='#C4B5FD' strokeWidth='2' />
    </svg>
  )
}

export function SortedIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 120 120'
      stroke='currentColor'
      fill='currentColor'
    >
      <path d='M40 80H20l30 30V10H40z m30-55v85h10V40h20l-30-30z' />
    </svg>
  )
}

export function OptionsIcon (props) {
  return (
    <svg
      {...props}
      viewBox='0 0 120 120'
      stroke='currentColor'
      fill='currentColor'
    >
      <path d='M103.5 30h-14.2a15 15 0 0 0-28.6 0H16.5a4.5 4.5 0 0 0 0 9h44.2a15 15 0 0 0 28.6 0h14.2a4.5 4.5 0 0 0 0-9Zm-87 51a4.5 4.5 0 0 0 0 9h14.2a15 15 0 0 0 28.6 0h44.2a4.5 4.5 0 0 0 0-9H59.3a15 15 0 0 0-28.6 0H16.5Z' />
    </svg>
  )
}
