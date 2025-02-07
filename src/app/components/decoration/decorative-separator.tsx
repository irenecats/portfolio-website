"use client";
import { useRef } from "react";
import style from "./decorative-bg.module.css";
import useRandomDelayAnimation from "./delay-animation";

export default function DecorativeSeparator() {
  const ref = useRef<SVGAElement>(null);
  useRandomDelayAnimation(ref, 1000, 2500, style.animatedStar);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${style.center} ${style.separator}`}
      width="3415"
      height="445"
      fill="none"
      viewBox="0 0 3415 445"
    >
      <path
        stroke="currentcolor"
        d="M8.15 8.243c201.752 0 329.478-7.624 473.02 62.493 286.467 139.933 213.512 130.569 672.5 81.5 352-37.631 382.83 172.764 747.5 197 224.38 14.913 338.5-67 646-96 346.31-32.66 336.83 198.764 859.68 145"
        strokeWidth="15"
      />
      <path
        stroke="currentcolor"
        d="M5.15 44.243c201.752 0 329.479-7.624 473.02 62.493 286.467 139.933 213.512 130.569 672.5 81.5 352-37.631 382.83 172.764 747.5 197 224.38 14.913 338.5-67 646-96 346.31-32.66 336.83 198.764 859.68 145"
        strokeWidth="5"
      />
      <g ref={ref}>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M562.187 54.856c.205-.087.344-.35.362-.646.02-.324-.108-.64-.324-.76-.618-.341-1.622-1.113-2.563-2.295a10.7 10.7 0 0 1-2.153-4.618c-.063-.325-.265-.537-.484-.537s-.42.212-.483.537a10.7 10.7 0 0 1-2.153 4.618c-.941 1.182-1.945 1.954-2.563 2.295-.2.111-.324.39-.326.687-.002.325.142.625.364.719 1.281.539 2.332 1.786 3.134 3.173a16 16 0 0 1 1.557 3.778c.071.278.242.456.431.478.217.026.429-.161.51-.478.232-.91.755-2.39 1.557-3.778s1.853-2.634 3.134-3.173"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m562.549 54.21-.499-.03zm-.362.646.194.46zm.038-1.406.242-.437zm-2.563-2.295-.391.312zm-2.153-4.618.49-.095zm-.484-.537v.5h.001zm-.483.537-.49-.095zm-2.153 4.618-.391-.311zm-2.563 2.295-.242-.437zm-.326.687.5.004zm.364.719.194-.461zm3.134 3.173.433-.25zm1.557 3.778-.485.123zm.431.478.058-.496zm.51-.478.484.123zm1.557-3.778-.433-.25zm2.997-3.85a.5.5 0 0 1-.05.191c-.024.044-.035.037-.007.025l.388.922c.454-.192.643-.687.667-1.077zm-.067-.291c-.017-.01.005-.004.032.06a.5.5 0 0 1 .035.231l.998.061a1.5 1.5 0 0 0-.111-.68 1.1 1.1 0 0 0-.47-.547zm-2.712-2.421c.979 1.229 2.032 2.045 2.712 2.421l.484-.875c-.555-.307-1.51-1.034-2.414-2.17zm-2.253-4.835a11.16 11.16 0 0 0 2.253 4.835l.782-.623a10.2 10.2 0 0 1-2.054-4.402zm.008-.132c-.061 0-.083-.03-.07-.016.014.014.045.06.062.148l.981-.19c-.083-.43-.404-.943-.974-.942zm.007.132a.3.3 0 0 1 .062-.148c.012-.014-.009.016-.07.016l.001-1c-.57 0-.891.511-.974.942zm-2.253 4.835a11.16 11.16 0 0 0 2.253-4.835l-.981-.19a10.2 10.2 0 0 1-2.054 4.402zm-2.712 2.421c.68-.376 1.733-1.192 2.712-2.421l-.782-.623c-.904 1.135-1.859 1.862-2.414 2.169zm-.068.252c0-.083.018-.155.042-.205.024-.053.042-.056.026-.047l-.484-.875c-.42.232-.582.727-.584 1.121zm.058.255c.03.012.014.02-.013-.035a.5.5 0 0 1-.045-.22l-1-.006c-.002.234.049.469.151.673.1.2.267.404.519.51zm3.373 3.384c-.821-1.42-1.941-2.781-3.373-3.384l-.388.922c1.13.475 2.112 1.607 2.895 2.962zm1.609 3.905a16.5 16.5 0 0 0-1.609-3.905l-.866.5a15.4 15.4 0 0 1 1.505 3.651zm.004.105c.047.005.061.027.051.015a.3.3 0 0 1-.055-.12l-.97.246c.099.387.383.796.857.852zm-.033-.105a.3.3 0 0 1-.058.123c-.002.002.004-.005.021-.01a.2.2 0 0 1 .07-.008l-.117.993c.582.069.945-.424 1.053-.852zm1.609-3.905a16.5 16.5 0 0 0-1.609 3.905l.969.246c.222-.872.73-2.308 1.506-3.65zm3.373-3.384c-1.432.603-2.552 1.964-3.373 3.384l.866.5c.783-1.355 1.765-2.487 2.895-2.962z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M650.687 243.856c.205-.087.344-.35.362-.646.02-.324-.107-.64-.324-.76-.618-.341-1.621-1.113-2.563-2.295a10.7 10.7 0 0 1-2.153-4.618c-.063-.325-.265-.537-.483-.537-.219 0-.42.212-.483.537a10.7 10.7 0 0 1-2.154 4.618c-.941 1.182-1.945 1.954-2.563 2.295-.2.111-.324.39-.326.687-.002.325.142.625.364.719 1.281.539 2.332 1.786 3.134 3.173a16 16 0 0 1 1.557 3.778c.071.278.243.456.431.478.218.026.429-.161.51-.478.232-.911.755-2.39 1.557-3.778s1.853-2.634 3.134-3.173"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m651.049 243.21-.499-.031v.001zm-.362.646.194.461zm.038-1.406.242-.437zm-2.563-2.295-.391.312zm-2.153-4.618.491-.095zm-.483-.537-.001.5h.001zm-.483.537-.491-.095zm-2.154 4.618-.391-.311zm-2.563 2.295-.242-.437zm-.326.687.5.003zm.364.719.194-.461zm3.134 3.173.433-.25zm1.557 3.778-.484.123zm.431.478.058-.496zm.51-.478.485.123zm1.557-3.778-.433-.25zm2.997-3.849a.5.5 0 0 1-.05.19c-.024.044-.035.037-.007.025l.388.922c.454-.192.644-.687.667-1.077zm-.067-.292c-.017-.01.005-.004.032.059.025.06.041.142.035.232l.998.061a1.5 1.5 0 0 0-.111-.68 1.1 1.1 0 0 0-.47-.547zm-2.712-2.421c.979 1.229 2.032 2.045 2.712 2.421l.484-.875c-.555-.307-1.51-1.034-2.414-2.169zm-2.253-4.835a11.2 11.2 0 0 0 2.253 4.835l.782-.623a10.2 10.2 0 0 1-2.053-4.402zm.008-.132c-.061 0-.082-.03-.07-.016.014.014.045.06.062.148l.982-.19c-.084-.431-.405-.943-.975-.942zm.007.132a.3.3 0 0 1 .062-.148c.013-.014-.009.016-.07.016l.001-1c-.57-.001-.891.511-.974.942zm-2.253 4.835a11.16 11.16 0 0 0 2.253-4.835l-.981-.19a10.2 10.2 0 0 1-2.054 4.402zm-2.712 2.421c.68-.376 1.734-1.192 2.712-2.421l-.782-.623c-.904 1.135-1.858 1.862-2.414 2.169zm-.068.252a.5.5 0 0 1 .042-.205c.024-.053.042-.056.026-.047l-.484-.875c-.42.232-.582.726-.584 1.121zm.058.255c.03.012.015.019-.013-.035a.5.5 0 0 1-.045-.22l-1-.006c-.002.234.049.469.151.673.1.2.268.404.519.51zm3.373 3.384c-.82-1.419-1.941-2.781-3.373-3.384l-.388.922c1.13.475 2.112 1.607 2.895 2.963zm1.609 3.905a16.5 16.5 0 0 0-1.609-3.905l-.866.501a15.4 15.4 0 0 1 1.506 3.65zm.004.105c.047.005.062.027.051.015a.3.3 0 0 1-.055-.12l-.969.246c.098.387.382.796.856.852zm-.033-.105c-.021.083-.051.117-.058.123-.002.002.004-.005.022-.011a.15.15 0 0 1 .069-.007l-.117.993c.582.069.945-.424 1.054-.852zm1.609-3.905a16.5 16.5 0 0 0-1.609 3.905l.97.246c.222-.872.729-2.308 1.505-3.65zm3.373-3.384c-1.432.603-2.552 1.965-3.373 3.384l.866.501c.783-1.356 1.765-2.488 2.895-2.963z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M732.859 120.422c.338-.143.565-.58.59-1.07.026-.521-.18-1.026-.528-1.219-1.003-.556-2.634-1.812-4.163-3.737-1.529-1.924-2.904-4.448-3.498-7.521-.102-.53-.429-.875-.785-.875-.355 0-.682.345-.784.875-.594 3.073-1.969 5.597-3.498 7.521-1.529 1.925-3.16 3.181-4.163 3.737-.311.172-.508.593-.528 1.052-.025.554.214 1.078.59 1.237 2.08.878 3.788 2.909 5.09 5.169s2.153 4.669 2.529 6.152c.119.467.413.762.731.781h.075c.314-.024.605-.317.723-.781.376-1.483 1.226-3.893 2.529-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m733.449 119.352-.5-.025zm-.59 1.07.194.461zm.062-2.289.243-.437zm-4.163-3.737.391-.311zm-3.498-7.521-.491.095zm-.785-.875v.5h.001zm-.784.875.491.095zm-3.498 7.521.391.311zm-4.163 3.737.242.438zm-.528 1.052.499.022zm.59 1.237.194-.46zm5.09 5.169-.433.249zm2.529 6.152-.484.123zm.731.781-.031.499zm.075 0-.038-.499zm.723-.781.484.123zm2.529-6.152.433.249zm5.18-6.264c-.019.396-.198.598-.285.635l.389.921c.591-.249.866-.923.895-1.506zm-.27-.756c.115.063.292.337.27.756l.999.05c.032-.622-.204-1.359-.784-1.681zm-4.313-3.864c1.567 1.971 3.247 3.273 4.313 3.864l.485-.875c-.941-.521-2.522-1.733-4.015-3.611zm-3.597-7.737c.612 3.165 2.027 5.761 3.597 7.737l.783-.622c-1.488-1.873-2.822-4.324-3.398-7.305zm-.293-.47c.007 0 .051.002.117.075a.8.8 0 0 1 .176.395l.982-.19c-.123-.634-.569-1.281-1.276-1.28zm-.294.47a.8.8 0 0 1 .176-.395c.066-.073.11-.075.117-.075l.001-1c-.707-.001-1.154.646-1.276 1.28zm-3.598 7.737c1.571-1.976 2.986-4.572 3.598-7.737l-.982-.19c-.577 2.981-1.91 5.432-3.398 7.305zm-4.312 3.864c1.066-.591 2.746-1.893 4.312-3.864l-.782-.622c-1.493 1.878-3.074 3.09-4.015 3.611zm-.271.636c.016-.365.172-.581.271-.636l-.485-.875c-.521.289-.761.915-.785 1.467zm.285.755c-.041-.018-.119-.077-.187-.223a1.15 1.15 0 0 1-.098-.532l-.999-.044c-.016.352.051.703.192 1.002.139.294.369.577.703.718zm5.329 5.379c-1.321-2.292-3.098-4.438-5.329-5.379l-.389.921c1.929.814 3.568 2.73 4.852 4.957zm2.581 6.279c-.386-1.521-1.252-3.974-2.581-6.279l-.866.499c1.276 2.215 2.111 4.581 2.478 6.026zm.276.405c-.009 0-.049-.006-.108-.068a.8.8 0 0 1-.168-.337l-.969.246c.146.576.56 1.119 1.184 1.157zm.007 0h-.007l-.061.998a1 1 0 0 0 .143-.001zm.276-.405a.8.8 0 0 1-.167.335c-.058.063-.099.069-.109.07l.075.997c.616-.046 1.025-.584 1.17-1.156zm2.581-6.279c-1.329 2.305-2.195 4.758-2.581 6.279l.969.246c.367-1.445 1.202-3.811 2.478-6.026zm5.328-5.379c-2.23.941-4.007 3.087-5.328 5.379l.866.499c1.284-2.227 2.923-4.143 4.851-4.957z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1208.64 227.699c.2-.084.34-.341.36-.63.02-.319-.11-.632-.32-.75-.62-.336-1.62-1.094-2.56-2.255-.93-1.16-1.78-2.683-2.14-4.536-.06-.32-.26-.528-.48-.528s-.42.208-.48.528c-.36 1.853-1.21 3.376-2.14 4.536-.94 1.161-1.94 1.919-2.56 2.255-.19.109-.32.382-.32.675 0 .319.14.614.36.705 1.28.53 2.32 1.755 3.12 3.118s1.32 2.816 1.55 3.711c.07.274.24.45.43.47.22.023.43-.161.51-.47.23-.895.75-2.348 1.55-3.711s1.84-2.588 3.12-3.118"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1209 227.069-.5-.033zm-.36.63.19.462zm.04-1.38.23-.439zm-2.56-2.255-.38.314zm-2.14-4.536-.49.096zm-.48-.528v.5zm-.48.528.49.096zm-2.14 4.536-.39-.314zm-2.56 2.255-.23-.439zm-.32.675.5.003zm.36.705-.19.462zm3.12 3.118-.43.253zm1.55 3.711.49-.125zm.43.47.06-.497zm.51-.47-.49-.125zm1.55-3.711-.43-.253zm2.98-3.781a.6.6 0 0 1-.05.18c-.02.041-.03.033 0 .022l.38.923c.45-.187.64-.673.67-1.059zm-.06-.278c-.02-.01 0-.005.03.055.02.057.03.137.03.223l1 .066c.02-.426-.13-.975-.59-1.222zm-2.7-2.38c.97 1.208 2.02 2.01 2.7 2.38l.47-.878c-.55-.302-1.5-1.015-2.4-2.13zm-2.25-4.754c.38 1.947 1.27 3.542 2.25 4.754l.77-.628c-.89-1.109-1.69-2.558-2.04-4.319zm.01-.124c-.06 0-.08-.029-.07-.016s.04.056.06.14l.98-.193c-.08-.43-.41-.932-.97-.931zm.01.124a.4.4 0 0 1 .06-.14c.01-.013-.01.016-.07.016v-1c-.56-.001-.89.501-.97.931zm-2.25 4.754c.98-1.212 1.87-2.807 2.25-4.754l-.98-.193c-.35 1.761-1.15 3.21-2.04 4.319zm-2.7 2.38c.68-.37 1.73-1.172 2.7-2.38l-.77-.628c-.9 1.115-1.85 1.828-2.4 2.13zm-.06.239c0-.08.02-.149.04-.196.02-.05.04-.052.02-.043l-.47-.878c-.42.229-.59.718-.59 1.111zm.05.241c.03.012.02.019-.01-.032a.6.6 0 0 1-.04-.209l-1-.007c0 .232.05.465.15.667.1.199.27.4.52.504zm3.36 3.326c-.81-1.396-1.93-2.734-3.36-3.326l-.38.923c1.12.467 2.1 1.579 2.88 2.909zm1.61 3.839c-.24-.933-.78-2.43-1.61-3.839l-.86.506c.77 1.317 1.28 2.727 1.5 3.583zm0 .098c.04.005.06.026.05.016a.2.2 0 0 1-.05-.114l-.97.25c.1.386.39.791.86.842zm-.04-.098c-.02.079-.05.111-.05.116 0 .002 0-.004.02-.01a.15.15 0 0 1 .07-.008l-.11.994c.57.062.93-.417 1.04-.842zm1.61-3.839c-.83 1.409-1.37 2.906-1.61 3.839l.97.25c.22-.856.73-2.266 1.5-3.583zm3.36-3.326c-1.43.592-2.55 1.93-3.36 3.326l.86.506c.78-1.33 1.76-2.442 2.88-2.909z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1346.47 272.68c.3-.145.51-.591.53-1.089.02-.53-.16-1.044-.47-1.24-.9-.566-2.35-1.846-3.71-3.805a18.8 18.8 0 0 1-3.12-7.656c-.09-.539-.38-.89-.7-.89s-.61.351-.7.89a18.8 18.8 0 0 1-3.12 7.656c-1.36 1.959-2.81 3.239-3.71 3.805-.27.174-.45.603-.47 1.069-.02.565.19 1.099.53 1.26 1.85.894 3.37 2.961 4.53 5.261 1.17 2.3 1.92 4.753 2.26 6.262.1.476.37.776.65.796a.4.4 0 0 0 .07-.001c.28-.024.54-.322.64-.795.34-1.509 1.09-3.962 2.26-6.262 1.16-2.3 2.68-4.367 4.53-5.261"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1347 271.591-.5-.022zm-.53 1.089.22.451zm.06-2.329.27-.423zm-3.71-3.805-.41.286zm-3.12-7.656.49-.083zm-.7-.89v.5zm-.7.89-.49-.083zm-3.12 7.656.41.286zm-3.71 3.805-.27-.423zm-.47 1.069.5.02v-.001zm.53 1.26-.22.451zm4.53 5.261.45-.225zm2.26 6.262-.49.109zm.65.796-.03.499zm.07-.001-.05-.498zm.64-.795.49.109zm2.26-6.262-.45-.225zm4.56-6.372c-.01.192-.05.361-.11.485-.06.13-.12.17-.13.176l.43.901c.29-.139.48-.395.6-.649.13-.26.19-.563.21-.869zm-.24-.796c.03.02.1.088.16.247.06.151.09.345.08.549l1 .044a2.7 2.7 0 0 0-.14-.942c-.11-.28-.29-.566-.56-.743zm-3.85-3.941c1.39 2.006 2.89 3.334 3.85 3.941l.54-.845c-.84-.525-2.24-1.755-3.57-3.667zm-3.2-7.858c.54 3.21 1.8 5.846 3.2 7.858l.82-.571a18.4 18.4 0 0 1-3.04-7.454zm-.21-.474c-.04 0-.02-.022.04.055.06.075.13.213.17.419l.98-.167a1.9 1.9 0 0 0-.36-.876c-.19-.234-.47-.431-.83-.431zm-.21.474a1 1 0 0 1 .17-.419c.06-.077.08-.055.04-.055v-1c-.36 0-.64.197-.83.431-.18.235-.31.542-.36.876zm-3.2 7.858a19.4 19.4 0 0 0 3.2-7.858l-.98-.167a18.4 18.4 0 0 1-3.04 7.454zm-3.85 3.941c.96-.607 2.46-1.935 3.85-3.941l-.82-.571c-1.33 1.912-2.73 3.142-3.57 3.667zm-.24.666c.01-.179.05-.341.1-.465.05-.129.11-.184.14-.201l-.54-.845c-.25.158-.41.404-.52.65-.11.25-.17.535-.18.823zm.24.791c-.01-.008-.08-.058-.15-.219-.06-.152-.1-.354-.09-.571l-1-.04c-.01.348.05.695.17.992.12.287.32.585.64.739zm4.77 5.486c-1.17-2.323-2.76-4.518-4.77-5.486l-.43.901c1.7.819 3.16 2.759 4.31 5.036zm2.3 6.379a29.8 29.8 0 0 0-2.3-6.379l-.89.451a28.3 28.3 0 0 1 2.21 6.145zm.19.405c.04.002.02.016-.04-.048a.9.9 0 0 1-.15-.357l-.98.217c.07.298.19.569.36.78.18.211.43.384.75.406zm-.01 0h.01l-.06.998c.04.003.09.003.14-.001zm.2-.405a.9.9 0 0 1-.15.356c-.05.064-.07.052-.05.049l.09.997c.31-.027.56-.2.73-.41s.29-.48.36-.775zm2.3-6.379a29.8 29.8 0 0 0-2.3 6.379l.98.217a28.3 28.3 0 0 1 2.21-6.145zm4.77-5.486c-2.01.968-3.6 3.163-4.77 5.486l.89.451c1.15-2.277 2.61-4.217 4.31-5.036z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1390.19 111.856c.2-.087.34-.35.36-.646.02-.324-.11-.64-.32-.76-.62-.341-1.63-1.113-2.57-2.295s-1.79-2.731-2.15-4.618c-.06-.325-.27-.537-.48-.537-.22 0-.42.212-.49.537-.36 1.887-1.21 3.437-2.15 4.618s-1.95 1.954-2.56 2.295c-.2.111-.33.39-.33.687 0 .325.14.625.36.719 1.28.539 2.34 1.786 3.14 3.173s1.32 2.867 1.56 3.778c.07.278.24.456.43.478.21.026.43-.161.51-.478.23-.911.75-2.39 1.55-3.778s1.86-2.634 3.14-3.173"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1390.55 111.21-.5-.031v.001zm-.36.646.19.461zm.04-1.406.24-.437zm-2.57-2.295-.39.312zm-2.15-4.618.49-.095zm-.48-.537-.01.5h.01zm-.49.537-.49-.095zm-2.15 4.618-.39-.311zm-2.56 2.295-.25-.437zm-.33.687.5.003zm.36.719.2-.461zm3.14 3.173.43-.25zm1.56 3.778-.49.123zm.43.478.05-.496zm.51-.478.48.123zm1.55-3.778-.43-.25zm3-3.849a.6.6 0 0 1-.05.19c-.02.044-.04.037-.01.025l.39.922c.46-.192.64-.687.67-1.077zm-.07-.292c-.01-.01.01-.004.03.059.03.06.05.142.04.232l1 .061c.01-.233-.03-.47-.11-.68a1.14 1.14 0 0 0-.47-.547zm-2.71-2.421c.98 1.229 2.03 2.045 2.71 2.421l.49-.875c-.56-.307-1.51-1.034-2.42-2.169zm-2.25-4.835c.38 1.98 1.27 3.602 2.25 4.835l.78-.623a10.2 10.2 0 0 1-2.05-4.402zm.01-.132c-.06 0-.09-.03-.07-.016.01.014.04.06.06.148l.98-.19c-.08-.431-.41-.943-.98-.942zm0 .132a.4.4 0 0 1 .06-.148c.02-.014 0 .016-.07.016l.01-1c-.57-.001-.89.511-.98.942zm-2.25 4.835c.98-1.233 1.87-2.855 2.25-4.835l-.98-.19a10.2 10.2 0 0 1-2.05 4.402zm-2.71 2.421c.68-.376 1.73-1.192 2.71-2.421l-.78-.623c-.91 1.135-1.86 1.862-2.42 2.169zm-.07.252a.6.6 0 0 1 .04-.205c.03-.053.04-.056.03-.047l-.49-.875c-.42.232-.58.726-.58 1.121zm.06.255c.03.012.01.019-.01-.035a.45.45 0 0 1-.05-.22l-1-.006c0 .234.05.469.15.673.1.2.27.404.52.51zm3.37 3.384c-.82-1.419-1.94-2.781-3.37-3.384l-.39.922c1.13.475 2.11 1.607 2.89 2.963zm1.61 3.905c-.24-.949-.78-2.472-1.61-3.905l-.87.501c.78 1.342 1.29 2.778 1.51 3.65zm0 .105c.05.005.07.027.05.015a.4.4 0 0 1-.05-.12l-.97.246c.1.387.38.796.86.852zm-.03-.105c-.02.083-.05.117-.06.123 0 .002.01-.005.02-.011a.2.2 0 0 1 .07-.007l-.11.993c.58.069.94-.424 1.05-.852zm1.61-3.905c-.83 1.433-1.37 2.956-1.61 3.905l.97.246c.22-.872.73-2.308 1.51-3.65zm3.37-3.384c-1.43.603-2.55 1.965-3.37 3.384l.87.501c.78-1.356 1.76-2.488 2.89-2.963z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1593.69 213.856c.2-.087.34-.35.36-.646.02-.324-.11-.64-.32-.76-.62-.341-1.63-1.113-2.57-2.295s-1.79-2.731-2.15-4.618c-.06-.325-.27-.537-.48-.537-.22 0-.42.212-.49.537-.36 1.887-1.21 3.437-2.15 4.618s-1.95 1.954-2.56 2.295c-.2.111-.33.39-.33.687 0 .325.14.625.36.719 1.28.539 2.34 1.786 3.14 3.173s1.32 2.867 1.56 3.778c.07.278.24.456.43.478.21.026.43-.161.51-.478.23-.911.75-2.39 1.55-3.778s1.86-2.634 3.14-3.173"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1594.05 213.21-.5-.031v.001zm-.36.646.19.461zm.04-1.406.24-.437zm-2.57-2.295-.39.312zm-2.15-4.618.49-.095zm-.48-.537v.5zm-.49.537-.49-.095zm-2.15 4.618-.39-.311zm-2.56 2.295-.25-.437zm-.33.687.5.003zm.36.719.2-.461zm3.14 3.173.43-.25zm1.56 3.778-.49.123zm.43.478.05-.496zm.51-.478.48.123zm1.55-3.778-.43-.25zm3-3.849c0 .082-.03.148-.05.19-.02.044-.03.037-.01.025l.39.922c.46-.192.64-.687.67-1.077zm-.07-.292c-.01-.01.01-.004.03.059.03.06.05.142.04.232l1 .061c.01-.233-.03-.47-.11-.68a1.14 1.14 0 0 0-.47-.547zm-2.71-2.421c.98 1.229 2.03 2.045 2.71 2.421l.49-.875c-.56-.307-1.51-1.034-2.42-2.169zm-2.25-4.835c.38 1.98 1.27 3.602 2.25 4.835l.78-.623a10.2 10.2 0 0 1-2.05-4.402zm.01-.132c-.06 0-.09-.03-.07-.016.01.014.04.06.06.148l.98-.19c-.08-.431-.41-.943-.97-.942zm0 .132a.4.4 0 0 1 .06-.148c.02-.014 0 .016-.06.016v-1c-.57-.001-.89.511-.98.942zm-2.25 4.835c.98-1.233 1.87-2.855 2.25-4.835l-.98-.19a10.2 10.2 0 0 1-2.05 4.402zm-2.71 2.421c.68-.376 1.73-1.192 2.71-2.421l-.78-.623c-.91 1.135-1.86 1.862-2.42 2.169zm-.07.252a.6.6 0 0 1 .04-.205c.03-.053.04-.056.03-.047l-.49-.875c-.42.232-.58.726-.58 1.121zm.06.255c.03.012.01.019-.01-.035a.45.45 0 0 1-.05-.22l-1-.006c0 .234.05.469.15.673.1.2.27.404.52.51zm3.37 3.384c-.82-1.419-1.94-2.781-3.37-3.384l-.39.922c1.13.475 2.11 1.607 2.9 2.963zm1.61 3.905c-.24-.949-.78-2.472-1.61-3.905l-.86.501c.77 1.342 1.28 2.778 1.5 3.65zm0 .105c.05.005.07.027.05.015a.4.4 0 0 1-.05-.12l-.97.246c.1.387.38.796.86.852zm-.03-.105c-.02.083-.05.117-.06.123 0 .002.01-.005.02-.011a.2.2 0 0 1 .07-.007l-.11.993c.58.069.94-.424 1.05-.852zm1.61-3.905c-.83 1.433-1.37 2.956-1.61 3.905l.97.246c.22-.872.73-2.308 1.51-3.65zm3.37-3.384c-1.43.603-2.55 1.965-3.37 3.384l.87.501c.78-1.356 1.76-2.488 2.89-2.963z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1704.36 407.422c.34-.143.56-.58.59-1.07.03-.521-.18-1.026-.53-1.219-1-.556-2.63-1.812-4.16-3.737-1.53-1.924-2.91-4.448-3.5-7.521-.1-.53-.43-.875-.78-.875-.36 0-.69.345-.79.875-.59 3.073-1.97 5.597-3.5 7.521-1.53 1.925-3.16 3.181-4.16 3.737-.31.172-.51.593-.53 1.052-.02.554.22 1.078.59 1.237 2.08.878 3.79 2.909 5.09 5.169s2.16 4.669 2.53 6.152c.12.467.41.762.73.781.03.002.05.002.08 0 .31-.024.6-.317.72-.781.38-1.483 1.23-3.893 2.53-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1704.95 406.352-.5-.025zm-.59 1.07.19.461zm.06-2.289.24-.437zm-4.16-3.737.39-.311zm-3.5-7.521-.49.095zm-.78-.875v.5zm-.79.875.49.095zm-3.5 7.521.39.311zm-4.16 3.737.24.438zm-.53 1.052.5.022zm.59 1.237.2-.46zm5.09 5.169-.43.249zm2.53 6.152-.48.123zm.73.781-.03.499zm.08 0-.04-.499zm.72-.781.48.123zm2.53-6.152.43.249zm5.18-6.264c-.02.396-.2.598-.29.635l.39.921c.59-.249.87-.923.9-1.506zm-.27-.756c.11.063.29.337.27.756l1 .05c.03-.622-.21-1.359-.79-1.681zm-4.31-3.864c1.56 1.971 3.24 3.273 4.31 3.864l.48-.875c-.94-.521-2.52-1.733-4.01-3.611zm-3.6-7.737c.61 3.165 2.03 5.761 3.6 7.737l.78-.622c-1.49-1.873-2.82-4.324-3.4-7.305zm-.29-.47s.05.002.11.075c.07.074.14.204.18.395l.98-.19c-.12-.634-.57-1.281-1.27-1.28zm-.3.47a.8.8 0 0 1 .18-.395c.06-.073.11-.075.12-.075v-1c-.71-.001-1.16.646-1.28 1.28zm-3.6 7.737c1.57-1.976 2.99-4.572 3.6-7.737l-.98-.19c-.58 2.981-1.91 5.432-3.4 7.305zm-4.31 3.864c1.07-.591 2.75-1.893 4.31-3.864l-.78-.622c-1.49 1.878-3.07 3.09-4.01 3.611zm-.27.636c.02-.365.17-.581.27-.636l-.48-.875c-.52.289-.76.915-.79 1.467zm.29.755c-.05-.018-.12-.077-.19-.223a1.1 1.1 0 0 1-.1-.532l-1-.044c-.01.352.05.703.19 1.002.14.294.37.577.71.718zm5.33 5.379c-1.33-2.292-3.1-4.438-5.33-5.379l-.39.921c1.93.814 3.56 2.73 4.85 4.957zm2.58 6.279c-.39-1.521-1.26-3.974-2.58-6.279l-.87.499c1.28 2.215 2.11 4.581 2.48 6.026zm.27.405c-.01 0-.05-.006-.11-.068a.74.74 0 0 1-.16-.337l-.97.246c.14.576.56 1.119 1.18 1.157zm.01 0h-.01l-.06.998c.05.003.1.003.14-.001zm.28-.405a.85.85 0 0 1-.17.335c-.06.063-.1.069-.11.07l.07.997c.62-.046 1.03-.584 1.17-1.156zm2.58-6.279c-1.33 2.305-2.2 4.758-2.58 6.279l.96.246c.37-1.445 1.21-3.811 2.48-6.026zm5.32-5.379c-2.23.941-4 3.087-5.32 5.379l.86.499c1.29-2.227 2.92-4.143 4.85-4.957z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1807.69 282.856c.2-.087.34-.35.36-.646.02-.324-.11-.64-.32-.76-.62-.341-1.63-1.113-2.57-2.295s-1.79-2.731-2.15-4.618c-.06-.325-.27-.537-.48-.537-.22 0-.42.212-.49.537-.36 1.887-1.21 3.437-2.15 4.618s-1.95 1.954-2.56 2.295c-.2.111-.33.39-.33.687 0 .325.14.625.36.719 1.28.539 2.34 1.786 3.14 3.173s1.32 2.867 1.56 3.778c.07.278.24.456.43.478.21.026.43-.161.51-.478.23-.911.75-2.39 1.55-3.778s1.86-2.634 3.14-3.173"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1808.05 282.21-.5-.031v.001zm-.36.646.19.461zm.04-1.406.24-.437zm-2.57-2.295-.39.312zm-2.15-4.618.49-.095zm-.48-.537v.5zm-.49.537-.49-.095zm-2.15 4.618-.39-.311zm-2.56 2.295-.25-.437zm-.33.687.5.003zm.36.719.2-.461zm3.14 3.173.43-.25zm1.56 3.778-.49.123zm.43.478.05-.496zm.51-.478.48.123zm1.55-3.778-.43-.25zm3-3.849c0 .082-.03.148-.05.19-.02.044-.03.037-.01.025l.39.922c.46-.192.64-.687.67-1.077zm-.07-.292c-.01-.01.01-.004.03.059.03.06.05.142.04.232l1 .061c.01-.233-.03-.47-.11-.68a1.14 1.14 0 0 0-.47-.547zm-2.71-2.421c.98 1.229 2.03 2.045 2.71 2.421l.49-.875c-.56-.307-1.51-1.034-2.42-2.169zm-2.25-4.835c.38 1.98 1.27 3.602 2.25 4.835l.78-.623a10.2 10.2 0 0 1-2.05-4.402zm.01-.132c-.06 0-.09-.03-.07-.016.01.014.04.06.06.148l.98-.19c-.08-.431-.41-.943-.97-.942zm0 .132a.4.4 0 0 1 .06-.148c.02-.014 0 .016-.06.016v-1c-.57-.001-.89.511-.98.942zm-2.25 4.835c.98-1.233 1.87-2.855 2.25-4.835l-.98-.19a10.2 10.2 0 0 1-2.05 4.402zm-2.71 2.421c.68-.376 1.73-1.192 2.71-2.421l-.78-.623c-.91 1.135-1.86 1.862-2.42 2.169zm-.07.252a.6.6 0 0 1 .04-.205c.03-.053.04-.056.03-.047l-.49-.875c-.42.232-.58.726-.58 1.121zm.06.255c.03.012.01.019-.01-.035a.45.45 0 0 1-.05-.22l-1-.006c0 .234.05.469.15.673.1.2.27.404.52.51zm3.37 3.384c-.82-1.419-1.94-2.781-3.37-3.384l-.39.922c1.13.475 2.11 1.607 2.9 2.963zm1.61 3.905c-.24-.949-.78-2.472-1.61-3.905l-.86.501c.77 1.342 1.28 2.778 1.5 3.65zm0 .105c.05.005.07.027.05.015a.4.4 0 0 1-.05-.12l-.97.246c.1.387.38.796.86.852zm-.03-.105c-.02.083-.05.117-.06.123 0 .002.01-.005.02-.011a.2.2 0 0 1 .07-.007l-.11.993c.58.069.94-.424 1.05-.852zm1.61-3.905c-.83 1.433-1.37 2.956-1.61 3.905l.97.246c.22-.872.73-2.308 1.51-3.65zm3.37-3.384c-1.43.603-2.55 1.965-3.37 3.384l.87.501c.78-1.356 1.76-2.488 2.89-2.963z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M2621.36 326.422c.34-.143.56-.58.59-1.07.03-.521-.18-1.026-.53-1.219-1-.556-2.63-1.812-4.16-3.737-1.53-1.924-2.91-4.448-3.5-7.521-.1-.53-.43-.875-.78-.875-.36 0-.69.345-.79.875-.59 3.073-1.97 5.597-3.5 7.521-1.53 1.925-3.16 3.181-4.16 3.737-.31.172-.51.593-.53 1.052-.02.554.22 1.078.59 1.237 2.08.878 3.79 2.909 5.09 5.169s2.16 4.669 2.53 6.152c.12.467.41.762.73.781.03.002.05.002.08 0 .31-.024.6-.317.72-.781.38-1.483 1.23-3.893 2.53-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m2621.95 325.352-.5-.025zm-.59 1.07.19.461zm.06-2.289.24-.437zm-4.16-3.737.39-.311zm-3.5-7.521-.49.095zm-.78-.875v.5zm-.79.875.49.095zm-3.5 7.521.39.311zm-4.16 3.737.24.438zm-.53 1.052.5.022zm.59 1.237.2-.46zm5.09 5.169-.43.249zm2.53 6.152-.48.123zm.73.781-.03.499zm.08 0-.04-.499zm.72-.781.48.123zm2.53-6.152.43.249zm5.18-6.264c-.02.396-.2.598-.29.635l.39.921c.59-.249.87-.923.9-1.506zm-.27-.756c.11.063.29.337.27.756l1 .05c.03-.622-.21-1.359-.79-1.681zm-4.31-3.864c1.56 1.971 3.24 3.273 4.31 3.864l.48-.875c-.94-.521-2.52-1.733-4.01-3.611zm-3.6-7.737c.61 3.165 2.03 5.761 3.6 7.737l.78-.622c-1.49-1.873-2.82-4.324-3.4-7.305zm-.29-.47s.05.002.11.075c.07.074.14.204.18.395l.98-.19c-.12-.634-.57-1.281-1.27-1.28zm-.3.47a.8.8 0 0 1 .18-.395c.06-.073.11-.075.12-.075v-1c-.71-.001-1.16.646-1.28 1.28zm-3.6 7.737c1.57-1.976 2.99-4.572 3.6-7.737l-.98-.19c-.58 2.981-1.91 5.432-3.4 7.305zm-4.31 3.864c1.07-.591 2.75-1.893 4.31-3.864l-.78-.622c-1.49 1.878-3.07 3.09-4.01 3.611zm-.27.636c.02-.365.17-.581.27-.636l-.48-.875c-.52.289-.76.915-.79 1.467zm.29.755c-.05-.018-.12-.077-.19-.223a1.1 1.1 0 0 1-.1-.532l-1-.044c-.01.352.05.703.19 1.002.14.294.37.577.71.718zm5.33 5.379c-1.33-2.292-3.1-4.438-5.33-5.379l-.39.921c1.93.814 3.56 2.73 4.85 4.957zm2.58 6.279c-.39-1.521-1.26-3.974-2.58-6.279l-.87.499c1.28 2.215 2.11 4.581 2.48 6.026zm.27.405c-.01 0-.05-.006-.11-.068a.74.74 0 0 1-.16-.337l-.97.246c.14.576.56 1.119 1.18 1.157zm.01 0h-.01l-.06.998c.05.003.1.003.14-.001zm.28-.405a.85.85 0 0 1-.17.335c-.06.063-.1.069-.11.07l.07.997c.62-.046 1.03-.584 1.17-1.156zm2.58-6.279c-1.33 2.305-2.2 4.758-2.58 6.279l.96.246c.37-1.445 1.21-3.811 2.48-6.026zm5.32-5.379c-2.23.941-4 3.087-5.32 5.379l.86.499c1.29-2.227 2.92-4.143 4.85-4.957z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M2762.86 206.422c.34-.143.56-.58.59-1.07.03-.521-.18-1.026-.53-1.219-1-.556-2.63-1.812-4.16-3.737-1.53-1.924-2.91-4.448-3.5-7.521-.1-.53-.43-.875-.78-.875-.36 0-.69.345-.79.875-.59 3.073-1.97 5.597-3.5 7.521-1.53 1.925-3.16 3.181-4.16 3.737-.31.172-.51.593-.53 1.052-.02.554.22 1.078.59 1.237 2.08.878 3.79 2.909 5.09 5.169s2.16 4.669 2.53 6.152c.12.467.41.762.73.781.03.002.05.002.08 0 .31-.024.6-.317.72-.781.38-1.483 1.23-3.893 2.53-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m2763.45 205.352-.5-.025zm-.59 1.07.19.461zm.06-2.289.24-.437zm-4.16-3.737.39-.311zm-3.5-7.521-.49.095zm-.78-.875v.5zm-.79.875.49.095zm-3.5 7.521.39.311zm-4.16 3.737.24.438zm-.53 1.052.5.022zm.59 1.237.2-.46zm5.09 5.169-.43.249zm2.53 6.152-.48.123zm.73.781-.03.499zm.08 0-.04-.499zm.72-.781.48.123zm2.53-6.152.43.249zm5.18-6.264c-.02.396-.2.598-.29.635l.39.921c.59-.249.87-.923.9-1.506zm-.27-.756c.11.063.29.337.27.756l1 .05c.03-.622-.21-1.359-.79-1.681zm-4.31-3.864c1.56 1.971 3.24 3.273 4.31 3.864l.48-.875c-.94-.521-2.52-1.733-4.01-3.611zm-3.6-7.737c.61 3.165 2.03 5.761 3.6 7.737l.78-.622c-1.49-1.873-2.82-4.324-3.4-7.305zm-.29-.47s.05.002.11.075c.07.074.14.204.18.395l.98-.19c-.12-.634-.57-1.281-1.27-1.28zm-.3.47a.8.8 0 0 1 .18-.395c.06-.073.11-.075.12-.075v-1c-.71-.001-1.16.646-1.28 1.28zm-3.6 7.737c1.57-1.976 2.99-4.572 3.6-7.737l-.98-.19c-.58 2.981-1.91 5.432-3.4 7.305zm-4.31 3.864c1.07-.591 2.75-1.893 4.31-3.864l-.78-.622c-1.49 1.878-3.07 3.09-4.01 3.611zm-.27.636c.02-.365.17-.581.27-.636l-.48-.875c-.52.289-.76.915-.79 1.467zm.29.755c-.05-.018-.12-.077-.19-.223a1.1 1.1 0 0 1-.1-.532l-1-.044c-.01.352.05.703.19 1.002.14.294.37.577.71.718zm5.33 5.379c-1.33-2.292-3.1-4.438-5.33-5.379l-.39.921c1.93.814 3.56 2.73 4.85 4.957zm2.58 6.279c-.39-1.521-1.26-3.974-2.58-6.279l-.87.499c1.28 2.215 2.11 4.581 2.48 6.026zm.27.405c-.01 0-.05-.006-.11-.068a.74.74 0 0 1-.16-.337l-.97.246c.14.576.56 1.119 1.18 1.157zm.01 0h-.01l-.06.998c.05.003.1.003.14-.001zm.28-.405a.85.85 0 0 1-.17.335c-.06.063-.1.069-.11.07l.07.997c.62-.046 1.03-.584 1.17-1.156zm2.58-6.279c-1.33 2.305-2.2 4.758-2.58 6.279l.96.246c.37-1.445 1.21-3.811 2.48-6.026zm5.32-5.379c-2.23.941-4 3.087-5.32 5.379l.86.499c1.29-2.227 2.92-4.143 4.85-4.957z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M2807.69 398.856c.2-.087.34-.35.36-.646.02-.324-.11-.64-.32-.76-.62-.341-1.63-1.113-2.57-2.295s-1.79-2.731-2.15-4.618c-.06-.325-.27-.537-.48-.537-.22 0-.42.212-.49.537-.36 1.887-1.21 3.437-2.15 4.618s-1.95 1.954-2.56 2.295c-.2.111-.33.39-.33.687 0 .325.14.625.36.719 1.28.539 2.34 1.786 3.14 3.173s1.32 2.867 1.56 3.778c.07.278.24.456.43.478.21.026.43-.161.51-.478.23-.911.75-2.39 1.55-3.778s1.86-2.634 3.14-3.173"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m2808.05 398.21-.5-.031v.001zm-.36.646.19.461zm.04-1.406.24-.437zm-2.57-2.295-.39.312zm-2.15-4.618.49-.095zm-.48-.537v.5zm-.49.537-.49-.095zm-2.15 4.618-.39-.311zm-2.56 2.295-.25-.437zm-.33.687.5.003zm.36.719.2-.461zm3.14 3.173.43-.25zm1.56 3.778-.49.123zm.43.478.05-.496zm.51-.478.48.123zm1.55-3.778-.43-.25zm3-3.849c0 .082-.03.148-.05.19-.02.044-.03.037-.01.025l.39.922c.46-.192.64-.687.67-1.077zm-.07-.292c-.01-.01.01-.004.03.059.03.06.05.142.04.232l1 .061c.01-.233-.03-.47-.11-.68a1.14 1.14 0 0 0-.47-.547zm-2.71-2.421c.98 1.229 2.03 2.045 2.71 2.421l.49-.875c-.56-.307-1.51-1.034-2.42-2.169zm-2.25-4.835c.38 1.98 1.27 3.602 2.25 4.835l.78-.623a10.2 10.2 0 0 1-2.05-4.402zm.01-.132c-.06 0-.09-.03-.07-.016.01.014.04.06.06.148l.98-.19c-.08-.431-.41-.943-.97-.942zm0 .132a.4.4 0 0 1 .06-.148c.02-.014 0 .016-.06.016v-1c-.57-.001-.89.511-.98.942zm-2.25 4.835c.98-1.233 1.87-2.855 2.25-4.835l-.98-.19a10.2 10.2 0 0 1-2.05 4.402zm-2.71 2.421c.68-.376 1.73-1.192 2.71-2.421l-.78-.623c-.91 1.135-1.86 1.862-2.42 2.169zm-.07.252a.6.6 0 0 1 .04-.205c.03-.053.04-.056.03-.047l-.49-.875c-.42.232-.58.726-.58 1.121zm.06.255c.03.012.01.019-.01-.035a.45.45 0 0 1-.05-.22l-1-.006c0 .234.05.469.15.673.1.2.27.404.52.51zm3.37 3.384c-.82-1.419-1.94-2.781-3.37-3.384l-.39.922c1.13.475 2.11 1.607 2.9 2.963zm1.61 3.905c-.24-.949-.78-2.472-1.61-3.905l-.86.501c.77 1.342 1.28 2.778 1.5 3.65zm0 .105c.05.005.07.027.05.015a.4.4 0 0 1-.05-.12l-.97.246c.1.387.38.796.86.852zm-.03-.105c-.02.083-.05.117-.06.123 0 .002.01-.005.02-.011a.2.2 0 0 1 .07-.007l-.11.993c.58.069.94-.424 1.05-.852zm1.61-3.905c-.83 1.433-1.37 2.956-1.61 3.905l.97.246c.22-.872.73-2.308 1.51-3.65zm3.37-3.384c-1.43.603-2.55 1.965-3.37 3.384l.87.501c.78-1.356 1.76-2.488 2.89-2.963z" />
        </g>
      </g>
    </svg>
  );
}
