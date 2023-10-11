const RingSvg = () => {
  return (
    <div className="relative animate-spin-slow">
      <svg
        width="165"
        height="165"
        viewBox="0 0 165 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <path
          d="M10.8 89c-.3-2.6-2-3.8-3.5-4.1l-.3 1c1.4.3 2.7 1.1 2.9 3.2.2 2.3-1.6 3.9-4.2 4.2-2.6.2-4.4-1-4.6-3.4-.2-2.1 1.2-3.2 2.1-3.6l-.5-1c-1.1.6-2.7 2.1-2.5 4.8.3 3 2.6 4.6 5.6 4.4 3.1-.4 5.3-2.3 5-5.5zM10.3 81.4l-4.4-.2.1-2.5c.1-1.5.6-2.1 1.9-2.3l2.7-.4.1-1.1-2.8.5c-1.2.2-1.9.6-2.2 1.9-.2-1.4-1.1-2.4-2.6-2.5-1.6-.1-2.8 1.1-2.9 3.1l-.2 4 10.3.5v-1zM5 81.2 1 81l.1-2.9c.1-1.3.8-2.2 2.1-2.2 1.3.1 2 1 1.9 2.4L5 81.2zM12.3 65.7l-1-.2-1.1 5.9-3.8-.7.8-4.4-.9-.2-.8 4.4-3.5-.6L3.1 64l-1-.2-1.2 6.9L11 72.6l1.3-6.9zM12.9 63.5l-2.5-2 1.4-4.4L15 57l.4-1.1-11 .5-.4 1.3 8.6 6.9.3-1.1zm-6.5-5c-.7-.5-1.1-.9-1.5-1.2.4 0 1 0 1.9-.1l4-.1-1.2 3.8-3.2-2.4zM8.3 49l8.5 3.9.4-1L8.7 48l1.7-3.5-.9-.4-3.6 7.8.8.4L8.3 49zM23.5 40.8l-.8-.5-3.2 5.1-3.3-2.1 2.4-3.8-.8-.5-2.4 3.8-3-1.8 3.2-5.1-.8-.5-3.7 5.9 8.7 5.5 3.7-6zM27.3 36l-1.5-2.9 3.2-3.4 3 1.2.8-.9-10.2-4-1 1 4.9 9.8.8-.8zm-3.7-7.2c-.4-.8-.7-1.3-.9-1.7.4.2.9.4 1.7.7l3.6 1.5-2.7 2.9-1.7-3.4zM35 28.2 30.9 23l-1.5-1.9 10.5 3.1.9-.7-6.4-8-.8.6 4 5.1 1.4 1.7-10.2-3-1 .9 6.4 8 .8-.6zM48 13.2c-1.6-2.7-4.3-3.5-6.9-2l-2.8 1.6 5.1 8.9 2.7-1.6c2.9-1.5 3.5-4.1 1.9-6.9zm-2.4 6.3-1.7 1-4.2-7.3 1.7-1c2.4-1.4 4.4-.6 5.6 1.6 1.4 2.3 1 4.3-1.4 5.7zM57.6 14.7l-1.9-6.2-.8-2.6 6.3 7.7.7-.2 1-9.9.8 2.6 1.9 6.2.9-.3-3-9.8-1.5.4-.7 7.4-.2 1.9-1.1-1.4-4.8-5.8-1.6.5 3 9.8 1-.3zM69 1.2l-1 .2 1.8 10.1 1-.2L69 1.2zM80.8.1l.4 6.4.1 2.2L74.8.4l-1.4.1.6 10.3 1.1-.1-.4-6.6-.2-2.4 6.9 8.6h1.1L81.8 0l-1 .1zM88 10.6l1 .1.8-9.3 3.9.3.1-.9-8.7-.8-.1 1 3.8.3-.8 9.3zM100.4 12.6l1 .3 1.1-4.3 5-4.7-1.2-.3-3.1 3c-.4.3-.8.8-1 .9l-.4-1.3-1.3-4.1-1.2-.3 2.1 6.6-1 4.2zM117 13.2c1.2-2.9 0-5.7-2.6-6.8s-5.5 0-6.7 3c-1.2 3 0 5.8 2.6 6.9 2.6 1 5.5-.2 6.7-3.1zm-6.3 2.1c-2.2-.9-2.9-3.3-1.9-5.6s3.1-3.4 5.3-2.5c2.2.9 2.9 3.3 1.9 5.6s-3.2 3.4-5.3 2.5zM120.1 21.2c2.1 1.3 3.9.7 5.3-1.5l3.3-5.5-.9-.5-3.3 5.3c-1.1 1.7-2.4 2.4-4 1.4s-1.7-2.4-.6-4.2l3.2-5.3-.9-.5-3.3 5.5c-1.3 2.2-.8 4 1.2 5.3zM136.2 23.5c1-1.3.8-2.9-.7-4.2l-3.1-2.6-6.5 7.9.8.7 2.8-3.4 2 1.6c1.1.9 1.3 1.8.7 2.9l-1.3 2.4.9.7 1.3-2.5c.5-1 .6-1.9-.2-2.9 1 .7 2.4.6 3.3-.6zm-4-.4-2.2-1.8 2.5-3.1 2.2 1.8c1 .8 1.3 2 .5 3s-2 .9-3 .1zM136.9 35l5.2-4.1 1.9-1.5-3.1 10.6.7.8 8-6.4-.7-.8-5 4-1.7 1.4 3-10.2-.9-1-8 6.4.6.8zM143.8 44.4l4-2.4 2.5 4.2.8-.4-2.5-4.2 3.3-1.9 3.1 5.4.8-.5-3.6-6.3-8.9 5.2.5.9zM157.2 50l-8.5 3.8.4.9 8.6-3.7 1.5 3.6.9-.4-3.5-8-.8.4 1.4 3.4zM154.3 74.8c.3 3.2 2.5 4.8 5.6 4.5 3.1-.3 4.9-2.5 4.6-5.5l-.3-3.2-10.2 1 .3 3.2zm9.1-3 .2 2c.3 2.7-1.2 4.2-3.7 4.5-2.7.3-4.3-1-4.6-3.7l-.2-1.9 8.3-.9zM160 81.8c-3.2-.2-5.5 1.9-5.6 4.7-.2 2.8 1.9 5.1 5 5.3 3.2.2 5.4-1.9 5.6-4.7.2-2.8-1.8-5.1-5-5.3zm-.5 9c-2.5-.1-4.3-1.8-4.2-4.2.1-2.4 2.1-3.8 4.6-3.7 2.5.1 4.3 1.8 4.1 4.2 0 2.3-2 3.8-4.5 3.7zM153.7 95l6.4 1.4 2.4.5-10.2 4.2-.2 1.1 10 2.2.3-1-6.3-1.4-2.2-.4 9.8-4.1.3-1.3-10.1-2.2-.2 1zM151.2 105.1l2.4 2.1-1.7 4.3h-3.2l-.4 1.1 11 .1.5-1.3-8.2-7.3-.4 1zm6.1 5.4c.6.6 1.1.9 1.4 1.2h-1.9l-4-.1 1.4-3.7 3.1 2.6zM155 119.9l-8.3-4.4-.5.9 8.3 4.4-1.8 3.4.8.5 4-7.7-.8-.4-1.7 3.3zM139.3 127.2l.8.6 3.5-5 3.2 2.3-2.6 3.7.8.5 2.6-3.7 2.8 2-3.4 5 .8.5 4-5.8-8.4-5.9-4.1 5.8zM134.3 132.9l3.2 3.3-3.5 3.4.7.7 3.5-3.4 2.6 2.7-4.5 4.3.7.7 5.2-5.1-7.2-7.3-.7.7zM124.9 140.7c-2.3 1.7-2.8 4.7-.9 7.3 1.9 2.6 4.9 3 7.2 1.3s2.8-4.7 1-7.3c-2-2.5-5-3-7.3-1.3zm5.7 7.9c-1.9 1.4-4.3.8-5.8-1.2s-1.3-4.5.6-5.9c1.9-1.4 4.3-.8 5.8 1.3 1.5 2 1.3 4.4-.6 5.8zM117.9 145.5l2 3.9-2.2 1.2c-1.3.7-2.1.5-2.9-.5l-1.7-2.1-1 .5 1.8 2.2c.7.9 1.5 1.3 2.7.9-1.1.9-1.5 2.2-.8 3.5.8 1.4 2.4 1.9 4.1 1l3.6-1.9-4.7-9.1-.9.4zm4.2 8.3-2.6 1.3c-1.1.6-2.3.4-2.9-.7-.6-1.1-.1-2.2 1.1-2.8l2.6-1.3 1.8 3.5zM106.1 153.9l-4.5 1.3-1.9-2.6-1.1.3 6.6 8.8 1.4-.4.8-11-1.1.3-.2 3.3zm-.3 5c-.1.8-.1 1.4-.1 1.9-.3-.4-.6-.8-1.1-1.5l-2.4-3.2 3.8-1.1-.2 3.9zM88.8 154.2c-2.3.2-3.2 1.6-3.5 2.6l-.2-2.1-1 .1.4 4.9 4.8-.4-.1-1-3.7.3c0-1.8 1.1-3.3 3.3-3.5 2.4-.2 4 1.4 4.2 4.1.2 2.7-1.3 4.5-3.5 4.6-2.1.2-3.2-1-3.7-2.2l-1 .5c.5 1.3 2 2.9 4.8 2.7 2.9-.2 4.8-2.6 4.6-5.7-.4-3.1-2.5-5.1-5.4-4.9zM77.2 154.3c-2.8-.2-5.2 1.8-5.4 5-.2 3.2 1.8 5.5 4.6 5.7 2.8.2 5.2-1.8 5.4-4.9.2-3.3-1.8-5.6-4.6-5.8zm-.8 9.7c-2.3-.2-3.8-2.2-3.6-4.7.2-2.5 1.9-4.3 4.3-4.1 2.4.2 3.8 2.2 3.6 4.7-.2 2.5-1.9 4.3-4.3 4.1zM65.7 152.5c-2.8-.7-5.4.9-6.1 4-.7 3.1.9 5.7 3.6 6.3 2.8.7 5.4-.9 6.1-4 .8-3-.9-5.7-3.6-6.3zm2.5 6.1c-.6 2.4-2.6 3.9-4.9 3.3-2.3-.6-3.4-2.8-2.8-5.2.6-2.4 2.6-3.9 4.9-3.4 2.4.6 3.4 2.9 2.8 5.3zM48.9 152.3c-1.2 2.9-.1 5.5 2.7 6.6l2.9 1.2 3.9-9.5-2.9-1.2c-2.9-1.2-5.4 0-6.6 2.9zm5.1 6.6-1.8-.8c-2.5-1-3.2-3.1-2.2-5.4 1-2.5 2.9-3.4 5.4-2.3l1.8.7-3.2 7.8zM41.8 141.8c-2.2-1.5-4.2-.9-5.4.1l.6.9c1.1-.9 2.5-1.4 4.3-.2 1.9 1.3 2 3.7.6 5.9-1.5 2.2-3.6 2.7-5.5 1.4-1.8-1.2-1.7-2.9-1.4-3.9l-1.1-.3c-.4 1.2-.3 3.4 1.9 4.9 2.5 1.7 5.3.9 7-1.6 1.6-2.4 1.5-5.4-1-7.2zM36.4 138.1l-2.8 1.5-3.4-3.1 1.2-3-.9-.8-4.1 10.2 1 1 9.8-5-.8-.8zm-7.2 3.8c-.8.4-1.3.7-1.7.9.2-.4.4-.9.7-1.7l1.5-3.7 2.9 2.7-3.4 1.8zM27.1 128.5c-1.5-1.9-3.5-1.9-5.5-.2l-4.9 4.1.7.8 4.8-4c1.6-1.3 3-1.5 4.2 0 1.2 1.5.8 2.8-.8 4.1l-4.8 4 .7.8 4.9-4.1c2-1.8 2.2-3.7.7-5.5zM17.5 124.1l-.5-1.4c-.4-1.3-.3-2.2.6-2.7 1-.6 2.1-.2 3 1.1.8 1.3.6 2.7-.3 3.7l.9.6c1.1-1.3 1.3-3 .2-4.7-1.2-2-3-2.5-4.4-1.6-1.3.8-1.5 2.3-1 3.8l.5 1.4c.4 1.3.3 2.1-.5 2.6-.9.6-2 .2-2.7-1-.9-1.5-.3-2.7.1-3.2l-.9-.6c-.6.7-1.2 2.3 0 4.2 1 1.7 2.7 2.3 4.1 1.4 1.4-.8 1.4-2.2.9-3.6zM15.3 109l-.9.4 2.5 5.5-3.5 1.6-1.9-4.1-.9.4 1.9 4.1-3.2 1.5-2.5-5.5-.8.4 2.9 6.4 9.3-4.3-2.9-6.4zM8 104.3c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .5 1 1 1zM156.9 64.4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"
          fill="#ffffff"
        ></path>
      </svg>
      <svg
        width="165"
        height="165"
        viewBox="0 0 165 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#a)">
          <mask
            id="b"
            width="50"
            height="50"
            x="57"
            y="57"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#ffffff"
              fill-rule="evenodd"
              d="M85.819 57h-7.638C77.17 68.228 68.228 77.17 57 78.182v7.636C68.228 86.83 77.17 95.772 78.181 107h7.638C86.83 95.772 95.772 86.83 107 85.818v-7.636C95.772 77.17 86.83 68.228 85.819 57Z"
              clip-rule="evenodd"
            ></path>
          </mask>
          <g mask="url(#b)">
            <path
              fill="#ffffff"
              d="m85.819 57 2.988-.27L88.56 54h-2.742v3h.001Zm-7.638 0v-3H75.44l-.245 2.73 2.985.27h.001ZM57 78.182l-.27-2.988-2.73.246v2.742h3Zm0 7.636h-3v2.742l2.73.246.27-2.988ZM78.181 107l-2.988.27.246 2.73h2.742v-3Zm7.638 0v3h2.742l.246-2.73-2.988-.27ZM107 85.818l.27 2.988 2.73-.246v-2.742h-3Zm0-7.636h3V75.44l-2.73-.246-.27 2.988ZM85.819 54h-7.638v6h7.638v-6Zm-10.625 2.73c-.883 9.786-8.68 17.583-18.464 18.465l.538 5.976c12.673-1.142 22.759-11.228 23.9-23.9l-5.976-.54.002-.001ZM54 78.183v7.636h6v-7.636h-6Zm2.73 10.624c9.785.882 17.582 8.679 18.464 18.463l5.975-.538C80.028 94.058 69.942 83.972 57.27 82.83l-.538 5.975-.002.002ZM78.182 110h7.638v-6h-7.638v6Zm10.626-2.73c.881-9.785 8.678-17.582 18.462-18.464l-.538-5.976c-12.672 1.142-22.758 11.229-23.9 23.9l5.976.54ZM110 85.817v-7.636h-6v7.636h6Zm-2.73-10.624c-9.785-.882-17.582-8.68-18.463-18.463l-5.977.539c1.142 12.672 11.228 22.759 23.9 23.9l.538-5.975.002-.001Z"
            ></path>
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#ffffff" d="M57 57h50v50H57z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default RingSvg;
