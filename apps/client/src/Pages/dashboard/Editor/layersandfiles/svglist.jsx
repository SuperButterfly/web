export const Arrow = ({ isVisible, isOpen, handleClick }) => {
  // if (isVisible) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="component-layout-icon"
      onClick={handleClick}
      style={{
        width: '16px',
        height: '16px',
        fill: '#b2b2b2',
        visibility: isVisible ? 'inblock' : 'hidden'
      }}
    >
      {isOpen ? (
        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
      ) : (
        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
      )}
    </svg>
  )
  // } return null;
}
/*

*/
export const Container = ({ mode }) => {
  if (mode === 'column') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 3H6v8h2V3z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm2-1h10a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1z"
        ></path>
      </svg>
    )
  } else if (mode === 'row') {
    return (
      <svg
        width="11"
        height="11"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 8V6H3v2h8z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm2-1h10a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1z"
        ></path>
      </svg>
    )
  } else if (mode === 'grid') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 8V6H3v2h2zM8 8V6H6v2h2zM11 8V6H9v2h2zM11 11V9H9v2h2zM8 11V9H6v2h2zM5 11V9H3v2h2zM5 5V3H3v2h2zM8 5V3H6v2h2zM11 5V3H9v2h2z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm2-1h10a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1z"
        ></path>
      </svg>
    )
  } else if (mode === 'slot') {
    return (
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="#b2b2b2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.96 7.318C3.96 7.162 3.926 7.018 3.855 6.885C3.789 6.748 3.65 6.625 3.439 6.515C3.232 6.402 2.919 6.305 2.502 6.223C2.17814 6.15636 1.8591 6.06817 1.547 5.959C1.29086 5.86998 1.04849 5.74543 0.827 5.589C0.640455 5.45495 0.486061 5.28108 0.375 5.08C0.265794 4.8685 0.211464 4.63296 0.217 4.395C0.217 4.145 0.271 3.908 0.381 3.685C0.494 3.463 0.652 3.265 0.855 3.094C1.063 2.922 1.311 2.787 1.6 2.689C1.889 2.592 2.21 2.543 2.566 2.543C3.074 2.543 3.508 2.633 3.867 2.813C4.227 2.993 4.502 3.233 4.693 3.533C4.885 3.83 4.98 4.16 4.98 4.523H3.896C3.89431 4.34121 3.83938 4.1639 3.738 4.013C3.62756 3.83712 3.47223 3.69387 3.288 3.598C3.06547 3.48208 2.81677 3.42559 2.566 3.434C2.266 3.434 2.021 3.48 1.834 3.574C1.66883 3.64803 1.52855 3.76818 1.43 3.92C1.36184 4.03367 1.32055 4.16141 1.30928 4.29347C1.29802 4.42554 1.31707 4.55843 1.365 4.682C1.408 4.772 1.482 4.855 1.588 4.934C1.693 5.008 1.842 5.078 2.033 5.144C2.225 5.211 2.469 5.277 2.766 5.344C3.286 5.461 3.713 5.602 4.049 5.766C4.385 5.93 4.635 6.131 4.799 6.369C4.963 6.607 5.045 6.896 5.045 7.236C5.04656 7.49956 4.98641 7.75982 4.86938 7.99598C4.75234 8.23213 4.58167 8.43762 4.371 8.596C4.13796 8.76899 3.87631 8.89965 3.598 8.982C3.301 9.072 2.967 9.117 2.596 9.117C2.037 9.117 1.564 9.017 1.178 8.818C0.791 8.619 0.498 8.361 0.298 8.045C0.104404 7.74659 0.000939119 7.3987 0 7.043H1.09C1.105 7.34 1.191 7.576 1.348 7.752C1.504 7.924 1.695 8.047 1.922 8.122C2.148 8.192 2.373 8.227 2.596 8.227C2.893 8.227 3.141 8.187 3.34 8.109C3.543 8.031 3.697 7.924 3.803 7.787C3.90743 7.65316 3.96215 7.48774 3.96 7.318ZM7.406 0V9H6.316V0H7.406ZM8.62 5.9V5.766C8.62 5.309 8.686 4.885 8.819 4.494C8.952 4.1 9.143 3.758 9.393 3.469C9.643 3.176 9.946 2.949 10.301 2.789C10.6769 2.62064 11.0852 2.53667 11.497 2.543C11.942 2.543 12.342 2.625 12.697 2.789C13.057 2.949 13.362 3.176 13.612 3.469C13.866 3.758 14.059 4.099 14.192 4.494C14.325 4.884 14.392 5.309 14.392 5.766V5.9C14.392 6.357 14.325 6.781 14.192 7.172C14.059 7.562 13.866 7.904 13.612 8.197C13.362 8.487 13.059 8.713 12.704 8.877C12.352 9.037 11.954 9.117 11.508 9.117C11.063 9.117 10.663 9.037 10.308 8.877C9.95836 8.71756 9.6465 8.4858 9.393 8.197C9.13802 7.89508 8.94319 7.54716 8.819 7.172C8.686 6.782 8.62 6.357 8.62 5.9ZM9.704 5.766V5.9C9.704 6.217 9.741 6.516 9.814 6.797C9.889 7.074 10.001 7.32 10.149 7.535C10.301 7.75 10.491 7.92 10.717 8.045C10.944 8.166 11.207 8.227 11.508 8.227C11.805 8.227 12.065 8.166 12.288 8.045C12.514 7.92 12.702 7.75 12.85 7.535C12.999 7.32 13.11 7.075 13.184 6.797C13.262 6.516 13.301 6.217 13.301 5.9V5.766C13.301 5.453 13.262 5.158 13.184 4.881C13.1165 4.61452 13.0013 4.36246 12.844 4.137C12.7006 3.92256 12.5079 3.74561 12.282 3.621C12.041 3.49168 11.7705 3.42724 11.497 3.434C11.2 3.434 10.938 3.496 10.711 3.621C10.489 3.746 10.301 3.918 10.149 4.137C10.001 4.352 9.889 4.6 9.815 4.881C9.73941 5.16987 9.70209 5.46741 9.704 5.766Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.165 3.492V2.66H16.98V1.12H15.896V2.66H14.736V3.492H15.896V7.424C15.896 7.846 15.961 8.182 16.089 8.432C16.222 8.678 16.4 8.854 16.623 8.959C16.845 9.064 17.089 9.117 17.355 9.117C17.55 9.117 17.716 9.104 17.853 9.077C17.993 9.053 18.107 9.027 18.193 9L18.187 8.115C18.1113 8.13194 18.0353 8.14761 17.959 8.162C17.8658 8.17746 17.7715 8.18549 17.677 8.186C17.557 8.186 17.443 8.168 17.337 8.133C17.2278 8.09435 17.1364 8.0172 17.08 7.916C17.013 7.806 16.98 7.645 16.98 7.43V3.492H18.164H18.165ZM16.981 3.492V2.66H15.897V3.492H16.981Z"
          fill="black"
        />
      </svg>
    )
  } else return null
}

export const Image = () => {
  return (
    <svg
      style={{ fill: '#363636', width: '14px', height: '14px' }}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 13"
    >
      <path d="M9.36 5a3.92 3.92 0 00-.31.28c-.64.69-1.25 1.39-1.89 2.06-.21.22-.17.39 0 .58l.91.9c.15.15.27.32.09.49s-.36.05-.5-.09C6.9 8.4 6.08 7.63 5.3 6.82c-.28-.29-.43-.24-.69 0C3.3 8 2 9.12.67 10.27c-.18.15-.38.37-.59.11s.05-.42.21-.56l4.29-3.75a.5.5 0 01.81 0c.24.25.52.47.74.74s.5.25.75 0C7.57 6 8.28 5.23 9 4.45a.5.5 0 01.77-.07c1 .92 2.05 1.84 3.06 2.77.15.14.28.31.12.5s-.39 0-.54-.11l-2.6-2.33c-.14-.1-.24-.21-.45-.21zM3 5.45A1.48 1.48 0 114.5 4 1.48 1.48 0 013 5.45z"></path>
    </svg>
  )
}

export const Text = () => {
  return (
    <svg
      style={{ width: '11', height: '11' }}
      viewBox="0 0 7 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.201 7.73299C3.13568 7.73442 3.07075 7.72247 3.01022 7.69788C2.94968 7.67329 2.89482 7.63657 2.849 7.58999C2.80237 7.54421 2.76562 7.48935 2.74103 7.4288C2.71643 7.36826 2.70451 7.30332 2.706 7.23799V0.934987H0.462001C0.400804 0.936931 0.339859 0.926311 0.282927 0.903781C0.225995 0.881252 0.174285 0.847291 0.130991 0.803997C0.0876965 0.760703 0.0537361 0.708993 0.0312065 0.652061C0.00867695 0.59513 -0.00194336 0.534184 8.75545e-07 0.472987C8.75545e-07 0.340987 0.0440008 0.230987 0.132001 0.142987C0.173422 0.0967416 0.224367 0.060014 0.281332 0.035329C0.338298 0.010644 0.399933 -0.00141282 0.462001 -1.26978e-05H5.94C6.00207 -0.00141282 6.0637 0.010644 6.12067 0.035329C6.17763 0.060014 6.22858 0.0967416 6.27 0.142987C6.31625 0.184409 6.35297 0.235353 6.37766 0.292319C6.40234 0.349284 6.4144 0.410919 6.413 0.472987C6.4144 0.535055 6.40234 0.596691 6.37766 0.653656C6.35297 0.710621 6.31625 0.761566 6.27 0.802987C6.22691 0.846338 6.1754 0.880412 6.11865 0.903113C6.0619 0.925814 6.0011 0.936661 5.94 0.934987H3.707V7.23799C3.707 7.37799 3.656 7.49499 3.553 7.58999C3.50718 7.63657 3.45232 7.67329 3.39179 7.69788C3.33125 7.72247 3.26632 7.73442 3.201 7.73299Z"
        fill="black"
      />
    </svg>
  )
}

export const List = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.429 3.467H4.57c-.094 0-.171.09-.171.2v.666c0 .11.077.2.171.2h6.858c.094 0 .171-.09.171-.2v-.666c0-.11-.077-.2-.171-.2zM4.57 3C4.256 3 4 3.298 4 3.667v.666c0 .369.256.667.571.667h6.858c.315 0 .571-.298.571-.667v-.666c0-.369-.256-.667-.571-.667H4.57z"
      ></path>
      <circle
        cx="2.5"
        cy="3.5"
        r="0.5"
        transform="rotate(-180 2.5 3.5)"
      ></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.429 6.467H4.57c-.094 0-.171.09-.171.2v.666c0 .11.077.2.171.2h6.858c.094 0 .171-.09.171-.2v-.666c0-.11-.077-.2-.171-.2zM4.57 6C4.256 6 4 6.298 4 6.667v.666c0 .369.256.667.571.667h6.858c.315 0 .571-.298.571-.667v-.666c0-.369-.256-.667-.571-.667H4.57z"
      ></path>
      <circle
        cx="2.5"
        cy="6.5"
        r="0.5"
        transform="rotate(-180 2.5 6.5)"
      ></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.429 9.467H4.57c-.094 0-.171.09-.171.2v.666c0 .11.077.2.171.2h6.858c.094 0 .171-.09.171-.2v-.666c0-.11-.077-.2-.171-.2zM4.57 9C4.256 9 4 9.298 4 9.667v.666c0 .368.256.667.571.667h6.858c.315 0 .571-.299.571-.667v-.666c0-.369-.256-.667-.571-.667H4.57z"
      ></path>
      <circle cx="2.5" cy="9.5" r="0.5"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1.7H1a.3.3 0 00-.3.3v10a.3.3 0 00.3.3h12a.3.3 0 00.3-.3V2a.3.3 0 00-.3-.3zM1 1a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H1z"
      ></path>
    </svg>
  )
}

export const ListItem = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1" cy="7" r="1"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.75H4a.25.25 0 00-.25.25v2c0 .138.112.25.25.25h8a.25.25 0 00.25-.25V6a.25.25 0 00-.25-.25zM4 5a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H4z"
      ></path>
    </svg>
  )
}

export const Video = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.01 4.82a.333.333 0 00-.51.282v3.797c0 .262.288.421.51.283l3.038-1.897a.333.333 0 000-.566L6.01 4.82z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z"
      ></path>
    </svg>
  )
}

export const H1 = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.495 10.788a.479.479 0 01-.352-.143.478.478 0 01-.143-.352V3.506c0-.14.048-.257.143-.352A.461.461 0 011.495 3c.14 0 .257.051.352.154a.461.461 0 01.154.352v2.926h4.17V3.506c0-.14.047-.257.142-.352A.461.461 0 016.665 3c.14 0 .257.051.352.154a.461.461 0 01.154.352v6.787c0 .14-.051.257-.154.352a.479.479 0 01-.352.143.479.479 0 01-.352-.143.478.478 0 01-.143-.352V7.367H2.001v2.926c0 .14-.051.257-.154.352a.479.479 0 01-.352.143zM9.184 10.733a.448.448 0 01-.462-.462c0-.132.044-.242.132-.33a.43.43 0 01.33-.143h1.309V4.221l-1.122.55a.678.678 0 01-.253.066.461.461 0 01-.341-.132.461.461 0 01-.132-.341c0-.205.095-.356.286-.451l1.496-.781a.684.684 0 01.308-.077h.23c.148 0 .272.051.375.154a.51.51 0 01.154.374v6.215h1.089a.43.43 0 01.33.143.43.43 0 01.143.33.43.43 0 01-.143.33.448.448 0 01-.33.132h-3.4z"></path>
    </svg>
  )
}

export const Button = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.937 6.703c-.214.023-.444.162-.683.415-.331.35-.8.543-1.262.568-.461.025-.951-.118-1.3-.486-.241-.256-.485-.424-.716-.479-.209-.049-.454-.017-.753.23-.51.421-1.03.485-1.47.405-.369-.067-.681-.237-.856-.333l-.06-.033a.35.35 0 01.327-.618c.024.012.048.026.073.04.18.096.391.21.641.256.262.047.567.018.899-.257.446-.368.91-.476 1.358-.371.425.1.783.379 1.067.68.178.188.452.283.753.267.302-.016.596-.144.79-.35.288-.304.663-.583 1.12-.63.477-.05.946.16 1.39.63.195.207.418.232.688.157.282-.078.556-.252.783-.396l.02-.012a.35.35 0 11.375.59l-.038.025c-.213.136-.567.361-.953.468-.431.12-.955.103-1.384-.351-.347-.366-.614-.435-.809-.415z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3.7H1c-.05 0-.115.022-.18.096a.528.528 0 00-.12.347v5.714c0 .151.054.272.12.347.065.074.13.096.18.096h12c.05 0 .115-.022.18-.096a.527.527 0 00.12-.347V4.143a.527.527 0 00-.12-.347c-.065-.074-.13-.096-.18-.096zM1 3c-.552 0-1 .512-1 1.143v5.714C0 10.488.448 11 1 11h12c.552 0 1-.512 1-1.143V4.143C14 3.512 13.552 3 13 3H1z"
      ></path>
    </svg>
  )
}

export const Iframe = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1.84H1c-.166 0-.3.161-.3.36v9.6c0 .199.134.36.3.36h12c.166 0 .3-.161.3-.36V2.2c0-.199-.134-.36-.3-.36zM1 1c-.552 0-1 .537-1 1.2v9.6c0 .663.448 1.2 1 1.2h12c.552 0 1-.537 1-1.2V2.2c0-.663-.448-1.2-1-1.2H1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 5.552l1.219.975a.35.35 0 01-.438.546L11 6.448l-.781.625a.35.35 0 01-.438-.546L11 5.552zM11 10.648l-1.219-.975a.35.35 0 01.438-.546l.781.625.781-.625a.35.35 0 01.438.546L11 10.648zM.15 3.5a.35.35 0 01.35-.35h13a.35.35 0 110 .7H.5a.35.35 0 01-.35-.35z"
      ></path>
    </svg>
  )
}

export const Link = () => {
  return (
    <svg
      width="14"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
    >
      <path d="M1.4 6.55L3.48 4.5l.7.7L2.1 7.24c-.38.4-.38 1.02 0 1.4l1.42 1.4c.4.4 1 .4 1.4 0L6.98 8l.7.7-2.05 2.06c-.78.78-2.04.78-2.8 0L1.4 9.36c-.77-.78-.77-2.04 0-2.8zm9.14-2.11L8.8 6.2l.7.7 1.75-1.76c.77-.78.77-2.03 0-2.8L9.85.93c-.8-.8-2.04-.8-2.82 0L5.27 2.67l.7.7 1.76-1.75c.4-.4 1.02-.4 1.4 0l1.4 1.4c.4.4.4 1.02 0 1.4zM4.48 8.2L8.7 4 8 3.3 3.78 7.5l.7.7z"></path>
    </svg>
  )
}

export const Lottie = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#lottie_svg__clip0_1608_36)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.375.656h5.25a3.719 3.719 0 013.719 3.719v5.25a3.719 3.719 0 01-3.719 3.719h-5.25A3.719 3.719 0 01.656 9.625v-5.25A3.719 3.719 0 014.375.656zM0 4.375A4.375 4.375 0 014.375 0h5.25A4.375 4.375 0 0114 4.375v5.25A4.375 4.375 0 019.625 14h-5.25A4.375 4.375 0 010 9.625v-5.25zm6.717 2.061c.543-1.017 1.217-2.28 3.042-2.28a.537.537 0 01.369.15.507.507 0 01.153.36.496.496 0 01-.153.36.525.525 0 01-.371.149c-1.108 0-1.538.655-2.114 1.735l-.356.65-.001.004c-.543 1.017-1.218 2.28-3.043 2.28a.536.536 0 01-.37-.15.508.508 0 01-.154-.36.497.497 0 01.153-.36.525.525 0 01.371-.149c1.108 0 1.538-.655 2.114-1.735l.358-.65.002-.004z"
        ></path>
      </g>
      <defs>
        <clipPath id="lottie_svg__clip0_1608_36">
          <path d="M0 0h14v14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export const Form = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2.7H1a.3.3 0 00-.3.3v1a.3.3 0 00.3.3h12a.3.3 0 00.3-.3V3a.3.3 0 00-.3-.3zM1 2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H1zM13 6.7H1a.3.3 0 00-.3.3v1a.3.3 0 00.3.3h12a.3.3 0 00.3-.3V7a.3.3 0 00-.3-.3zM1 6a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1H1z"
      ></path>
      <path d="M9 11a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"></path>
    </svg>
  )
}

export const Input = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3.7H1c-.05 0-.115.022-.18.096a.528.528 0 00-.12.347v5.714c0 .151.054.272.12.347.065.074.13.096.18.096h12c.05 0 .115-.022.18-.096a.527.527 0 00.12-.347V4.143a.527.527 0 00-.12-.347c-.065-.074-.13-.096-.18-.096zM1 3c-.552 0-1 .512-1 1.143v5.714C0 10.488.448 11 1 11h12c.552 0 1-.512 1-1.143V4.143C14 3.512 13.552 3 13 3H1z"
      ></path>
      <path d="M2.667 5H2v.493h.667v3.014H2V9h2v-.493h-.667V5.493H4V5H2.667z"></path>
    </svg>
  )
}

export const Textarea = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.667 3H2v.493h.667v3.014H2V7h2v-.493h-.667V3.493H4V3H2.667z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1.7H1a.3.3 0 00-.3.3v10a.3.3 0 00.3.3h12a.3.3 0 00.3-.3V2a.3.3 0 00-.3-.3zM1 1a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H1z"
      ></path>
    </svg>
  )
}

export const Label = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.7 4v5a.3.3 0 00.3.3h8.624a.3.3 0 00.198-.074l2.857-2.5a.3.3 0 000-.452l-2.857-2.5a.3.3 0 00-.198-.074H1a.3.3 0 00-.3.3zM1 3a1 1 0 00-1 1v5a1 1 0 001 1h8.624a1 1 0 00.659-.247l2.857-2.5a1 1 0 000-1.506l-2.857-2.5A1 1 0 009.624 3H1z"
      ></path>
      <path d="M11 6.5a.5.5 0 11-1 0 .5.5 0 011 0z"></path>
    </svg>
  )
}

export const Select = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5.5a.5.5 0 01.5-.5H3v4H1.5a.5.5 0 01-.5-.5v-3zM4 9h8.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H4v4zM1.5 4A1.5 1.5 0 000 5.5v3A1.5 1.5 0 001.5 10h11A1.5 1.5 0 0014 8.5v-3A1.5 1.5 0 0012.5 4h-11z"
      ></path>
    </svg>
  )
}

export const Icon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#icon_svg__clip0_5574_49090)">
        <path d="M4.156 4.667c-1.113 0-2.152.462-2.968 1.232C.445 6.67 0 7.671 0 8.75c0 2.234 1.856 4.083 4.082 4.083 2.227 0 4.082-1.849 4.082-4.083.075-2.234-1.707-4.083-4.008-4.083zm2.376 6.471c-.668.694-1.485 1.002-2.376 1.002-1.855 0-3.34-1.54-3.34-3.39 0-.847.372-1.695.965-2.311.668-.694 1.485-1.002 2.375-1.002 1.856 0 3.34 1.541 3.34 3.39 0 .848-.296 1.695-.964 2.311z"></path>
        <path d="M13.492 10.42c.229 0 .381-.082.458-.243.076-.162.076-.243-.076-.486L9.748 2.576a.417.417 0 00-.381-.243.417.417 0 00-.382.243L7 6.053l.458.728c.306-.566.688-1.132.993-1.78l.84-1.455 3.513 6.145H7.892c0 .243-.309.486-.309.809 1.75 0 4.152-.08 5.909-.08z"></path>
        <path d="M8.817 4.11c.074-.15.148-.3.222-.376.073-.15.147-.224.22-.374.074-.075.074-.15.074-.15V1.636c0-.3-.147-.45-.442-.45H2.775c-.368-.075-.442.075-.442.375v4.272c.221-.075.516-.15.737-.3V1.86h5.526v2.55c.074-.15.148-.226.221-.3z"></path>
      </g>
      <defs>
        <clipPath id="icon_svg__clip0_5574_49090">
          <path d="M0 0h14v14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
