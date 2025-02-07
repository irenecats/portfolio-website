"use client";

import { useRef } from "react";
import style from "./decorative-bg.module.css";
import useRandomDelayAnimation from "./delay-animation";

export default function DecorativeFooter() {
  const ref = useRef<SVGAElement>(null);
  useRandomDelayAnimation(ref, 1000, 2500, style.animatedStar);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3406"
      height="350"
      fill="none"
      viewBox="0 0 3406 350"
      className={style.center}
    >
      <path
        fill="currentcolor"
        stroke="currentcolor"
        d="M1180.5 303.525c-250.017-62.354-735-194.5-1179.52-52.499v100.5l3404.02.004V9.226c-217-39.2-408.25 66.807-463.5 99.799-174.5 104.201-275.89 74.3-383 53.5-275.5-53.5-402-33-596 28.5-201.59 63.906-497.5 183.455-782 112.5Z"
      />
      <path
        stroke="currentcolor"
        d="M.98 253.026c444.52-142.001 929.503-9.855 1179.52 52.499 284.5 70.955 580.41-48.594 782-112.5 194-61.5 320.5-82 596-28.5 107.11 20.8 208.5 50.701 383-53.5 55.25-32.992 246.5-139 463.5-99.799"
        strokeWidth="5"
      />
      <g ref={ref}>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M503.359 154.422c.338-.143.565-.58.59-1.07.026-.521-.18-1.026-.528-1.219-1.003-.556-2.634-1.812-4.163-3.737-1.529-1.924-2.903-4.448-3.498-7.521-.102-.53-.429-.875-.784-.875s-.683.345-.785.875c-.594 3.073-1.969 5.597-3.498 7.521-1.529 1.925-3.16 3.181-4.163 3.737-.31.172-.508.593-.528 1.052-.025.554.214 1.078.59 1.237 2.08.878 3.788 2.909 5.09 5.169s2.153 4.669 2.529 6.152c.119.467.413.762.731.781h.075c.315-.024.605-.317.723-.781.376-1.483 1.227-3.893 2.529-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m503.949 153.352-.499-.025h-.001zm-.59 1.07.195.461zm.062-2.289.243-.437zm-4.163-3.737.392-.311zm-3.498-7.521-.491.095zm-.784-.875-.001.5h.001zm-.785.875.491.095zm-3.498 7.521.392.311zm-4.163 3.737.242.438zm-.528 1.052.499.022zm.59 1.237.194-.46zm5.09 5.169-.433.249zm2.529 6.152-.484.123zm.731.781-.031.499zm.075 0-.038-.499zm.723-.781.484.123zm2.529-6.152.433.249zm5.18-6.264c-.019.396-.198.598-.284.635l.389.921c.59-.249.865-.923.894-1.506zm-.27-.756c.115.063.292.337.271.756l.998.05c.032-.622-.204-1.359-.784-1.681zm-4.312-3.864c1.566 1.971 3.246 3.273 4.312 3.864l.485-.875c-.941-.521-2.522-1.733-4.014-3.611zm-3.598-7.737c.612 3.165 2.027 5.761 3.598 7.737l.783-.622c-1.489-1.873-2.822-4.324-3.399-7.305zm-.293-.47c.007 0 .051.002.117.075.067.074.14.204.176.395l.982-.19c-.122-.634-.569-1.281-1.276-1.28zm-.294.47a.8.8 0 0 1 .176-.395c.066-.073.11-.075.117-.075l.001-1c-.707-.001-1.153.646-1.276 1.28zm-3.597 7.737c1.57-1.976 2.985-4.572 3.597-7.737l-.982-.19c-.576 2.981-1.91 5.432-3.398 7.305zm-4.313 3.864c1.066-.591 2.746-1.893 4.313-3.864l-.783-.622c-1.493 1.878-3.074 3.09-4.015 3.611zm-.271.636c.016-.365.172-.581.271-.636l-.485-.875c-.521.289-.761.915-.785 1.467zm.285.755c-.041-.018-.118-.077-.187-.223a1.15 1.15 0 0 1-.098-.532l-.999-.044c-.015.352.051.703.192 1.002.139.294.369.577.704.718zm5.329 5.379c-1.321-2.292-3.098-4.438-5.329-5.379l-.388.921c1.928.814 3.567 2.73 4.851 4.957zm2.581 6.279c-.386-1.521-1.252-3.974-2.581-6.279l-.866.499c1.276 2.215 2.111 4.581 2.478 6.026zm.276.405c-.009 0-.049-.006-.108-.068a.8.8 0 0 1-.168-.337l-.969.246c.146.576.56 1.119 1.184 1.157zm.007 0h-.007l-.061.998a1 1 0 0 0 .143-.001zm.276-.405a.76.76 0 0 1-.167.335c-.058.063-.099.069-.109.07l.075.997c.616-.046 1.025-.584 1.17-1.156zm2.581-6.279c-1.329 2.305-2.195 4.758-2.581 6.279l.969.246c.367-1.445 1.202-3.811 2.478-6.026zm5.329-5.379c-2.231.941-4.008 3.087-5.329 5.379l.866.499c1.284-2.227 2.923-4.143 4.852-4.957z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1082.64 213.699c.2-.084.34-.341.36-.63.02-.319-.11-.632-.32-.75-.62-.336-1.62-1.094-2.56-2.255-.93-1.16-1.78-2.683-2.14-4.536-.06-.32-.26-.528-.48-.528s-.42.208-.48.528c-.36 1.853-1.21 3.376-2.14 4.536-.94 1.161-1.94 1.919-2.56 2.255-.19.109-.32.382-.32.675 0 .319.14.614.36.705 1.28.53 2.32 1.755 3.12 3.118s1.32 2.816 1.55 3.711c.07.274.24.45.43.47.22.023.43-.161.51-.47.23-.895.75-2.348 1.55-3.711s1.84-2.588 3.12-3.118"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1083 213.069-.5-.033zm-.36.63.19.462zm.04-1.38.23-.439zm-2.56-2.255-.38.314zm-2.14-4.536-.49.096zm-.48-.528v.5zm-.48.528.49.096zm-2.14 4.536-.39-.314zm-2.56 2.255-.23-.439zm-.32.675.5.003zm.36.705-.19.462zm3.12 3.118-.43.253zm1.55 3.711.49-.125zm.43.47.06-.497zm.51-.47-.49-.125zm1.55-3.711-.43-.253zm2.98-3.781a.6.6 0 0 1-.05.18c-.02.041-.03.033 0 .022l.38.923c.45-.187.64-.673.67-1.059zm-.06-.278c-.02-.01 0-.005.03.055.02.057.03.137.03.223l1 .066c.02-.426-.13-.975-.59-1.222zm-2.7-2.38c.97 1.208 2.02 2.01 2.7 2.38l.47-.878c-.55-.302-1.5-1.015-2.4-2.13zm-2.25-4.754c.38 1.947 1.27 3.542 2.25 4.754l.77-.628c-.89-1.109-1.69-2.558-2.04-4.319zm.01-.124c-.06 0-.08-.029-.07-.016s.04.056.06.14l.98-.193c-.08-.43-.41-.932-.97-.931zm.01.124a.4.4 0 0 1 .06-.14c.01-.013-.01.016-.07.016v-1c-.56-.001-.89.501-.97.931zm-2.25 4.754c.98-1.212 1.87-2.807 2.25-4.754l-.98-.193c-.35 1.761-1.15 3.21-2.04 4.319zm-2.7 2.38c.68-.37 1.73-1.172 2.7-2.38l-.77-.628c-.9 1.115-1.85 1.828-2.4 2.13zm-.06.239c0-.08.02-.149.04-.196.02-.05.04-.052.02-.043l-.47-.878c-.42.229-.59.718-.59 1.111zm.05.241c.03.012.02.019-.01-.032a.6.6 0 0 1-.04-.209l-1-.007c0 .232.05.465.15.667.1.199.27.4.52.504zm3.36 3.326c-.81-1.396-1.93-2.734-3.36-3.326l-.38.923c1.12.467 2.1 1.579 2.88 2.909zm1.61 3.839c-.24-.933-.78-2.43-1.61-3.839l-.86.506c.77 1.317 1.28 2.727 1.5 3.583zm0 .098c.04.005.06.026.05.016a.2.2 0 0 1-.05-.114l-.97.25c.1.386.39.791.86.842zm-.04-.098c-.02.079-.05.111-.05.116 0 .002 0-.004.02-.01a.15.15 0 0 1 .07-.008l-.11.994c.57.062.93-.417 1.04-.842zm1.61-3.839c-.83 1.409-1.37 2.906-1.61 3.839l.97.25c.22-.856.73-2.266 1.5-3.583zm3.36-3.326c-1.43.592-2.55 1.93-3.36 3.326l.86.506c.78-1.33 1.76-2.442 2.88-2.909z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1214.36 269.422c.34-.143.56-.58.59-1.07.03-.521-.18-1.026-.53-1.219-1-.556-2.63-1.812-4.16-3.737-1.53-1.924-2.91-4.448-3.5-7.521-.1-.53-.43-.875-.78-.875-.36 0-.69.345-.79.875-.59 3.073-1.97 5.597-3.5 7.521-1.53 1.925-3.16 3.181-4.16 3.737-.31.172-.51.593-.53 1.052-.02.554.22 1.078.59 1.237 2.08.878 3.79 2.909 5.09 5.169s2.16 4.669 2.53 6.152c.12.467.41.762.73.781.03.002.05.002.08 0 .31-.024.6-.317.72-.781.38-1.483 1.23-3.893 2.53-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1214.95 268.352-.5-.025zm-.59 1.07.19.461zm.06-2.289.24-.437zm-4.16-3.737.39-.311zm-3.5-7.521-.49.095zm-.78-.875v.5zm-.79.875.49.095zm-3.5 7.521.39.311zm-4.16 3.737.24.438zm-.53 1.052.5.022zm.59 1.237.2-.46zm5.09 5.169-.43.249zm2.53 6.152-.48.123zm.73.781-.03.499zm.08 0-.04-.499zm.72-.781.48.123zm2.53-6.152.43.249zm5.18-6.264c-.02.396-.2.598-.29.635l.39.921c.59-.249.87-.923.9-1.506zm-.27-.756c.11.063.29.337.27.756l1 .05c.03-.622-.21-1.359-.79-1.681zm-4.31-3.864c1.56 1.971 3.24 3.273 4.31 3.864l.48-.875c-.94-.521-2.52-1.733-4.01-3.611zm-3.6-7.737c.61 3.165 2.03 5.761 3.6 7.737l.78-.622c-1.49-1.873-2.82-4.324-3.4-7.305zm-.29-.47s.05.002.11.075c.07.074.14.204.18.395l.98-.19c-.12-.634-.57-1.281-1.27-1.28zm-.3.47a.8.8 0 0 1 .18-.395c.06-.073.11-.075.12-.075v-1c-.71-.001-1.16.646-1.28 1.28zm-3.6 7.737c1.57-1.976 2.99-4.572 3.6-7.737l-.98-.19c-.58 2.981-1.91 5.432-3.4 7.305zm-4.31 3.864c1.07-.591 2.75-1.893 4.31-3.864l-.78-.622c-1.49 1.878-3.07 3.09-4.01 3.611zm-.27.636c.02-.365.17-.581.27-.636l-.48-.875c-.52.289-.76.915-.79 1.467zm.29.755c-.05-.018-.12-.077-.19-.223a1.1 1.1 0 0 1-.1-.532l-1-.044c-.01.352.05.703.19 1.002.14.294.37.577.71.718zm5.33 5.379c-1.33-2.292-3.1-4.438-5.33-5.379l-.39.921c1.93.814 3.56 2.73 4.85 4.957zm2.58 6.279c-.39-1.521-1.26-3.974-2.58-6.279l-.87.499c1.28 2.215 2.11 4.581 2.48 6.026zm.27.405c-.01 0-.05-.006-.11-.068a.74.74 0 0 1-.16-.337l-.97.246c.14.576.56 1.119 1.18 1.157zm.01 0h-.01l-.06.998c.05.003.1.003.14-.001zm.28-.405a.85.85 0 0 1-.17.335c-.06.063-.1.069-.11.07l.07.997c.62-.046 1.03-.584 1.17-1.156zm2.58-6.279c-1.33 2.305-2.2 4.758-2.58 6.279l.96.246c.37-1.445 1.21-3.811 2.48-6.026zm5.32-5.379c-2.23.941-4 3.087-5.32 5.379l.86.499c1.29-2.227 2.92-4.143 4.85-4.957z" />
        </g>

        <g fill="currentcolor" className={style.star}>
          <path
            d="M1752.64 225.699c.2-.084.34-.341.36-.63.02-.319-.11-.632-.32-.75-.62-.336-1.62-1.094-2.56-2.255-.93-1.16-1.78-2.683-2.14-4.536-.06-.32-.26-.528-.48-.528s-.42.208-.48.528c-.36 1.853-1.21 3.376-2.14 4.536-.94 1.161-1.94 1.919-2.56 2.255-.19.109-.32.382-.32.675 0 .319.14.614.36.705 1.28.53 2.32 1.755 3.12 3.118s1.32 2.816 1.55 3.711c.07.274.24.45.43.47.22.023.43-.161.51-.47.23-.895.75-2.348 1.55-3.711s1.84-2.588 3.12-3.118"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1753 225.069-.5-.033zm-.36.63.19.462zm.04-1.38.23-.439zm-2.56-2.255-.38.314zm-2.14-4.536-.49.096zm-.48-.528v.5zm-.48.528.49.096zm-2.14 4.536-.39-.314zm-2.56 2.255-.23-.439zm-.32.675.5.003zm.36.705-.19.462zm3.12 3.118-.43.253zm1.55 3.711.49-.125zm.43.47.06-.497zm.51-.47-.49-.125zm1.55-3.711-.43-.253zm2.98-3.781a.6.6 0 0 1-.05.18c-.02.041-.03.033 0 .022l.38.923c.45-.187.64-.673.67-1.059zm-.06-.278c-.02-.01 0-.005.03.055.02.057.03.137.03.223l1 .066c.02-.426-.13-.975-.59-1.222zm-2.7-2.38c.97 1.208 2.02 2.01 2.7 2.38l.47-.878c-.55-.302-1.5-1.015-2.4-2.13zm-2.25-4.754c.38 1.947 1.27 3.542 2.25 4.754l.77-.628c-.89-1.109-1.69-2.558-2.04-4.319zm.01-.124c-.06 0-.08-.029-.07-.016s.04.056.06.14l.98-.193c-.08-.43-.41-.932-.97-.931zm.01.124a.4.4 0 0 1 .06-.14c.01-.013-.01.016-.07.016v-1c-.56-.001-.89.501-.97.931zm-2.25 4.754c.98-1.212 1.87-2.807 2.25-4.754l-.98-.193c-.35 1.761-1.15 3.21-2.04 4.319zm-2.7 2.38c.68-.37 1.73-1.172 2.7-2.38l-.77-.628c-.9 1.115-1.85 1.828-2.4 2.13zm-.06.239c0-.08.02-.149.04-.196.02-.05.04-.052.02-.043l-.47-.878c-.42.229-.59.718-.59 1.111zm.05.241c.03.012.02.019-.01-.032a.6.6 0 0 1-.04-.209l-1-.007c0 .232.05.465.15.667.1.199.27.4.52.504zm3.36 3.326c-.81-1.396-1.93-2.734-3.36-3.326l-.38.923c1.12.467 2.1 1.579 2.88 2.909zm1.61 3.839c-.24-.933-.78-2.43-1.61-3.839l-.86.506c.77 1.317 1.28 2.727 1.5 3.583zm0 .098c.04.005.06.026.05.016a.2.2 0 0 1-.05-.114l-.97.25c.1.386.39.791.86.842zm-.04-.098c-.02.079-.05.111-.05.116 0 .002 0-.004.02-.01a.15.15 0 0 1 .07-.008l-.11.994c.57.062.93-.417 1.04-.842zm1.61-3.839c-.83 1.409-1.37 2.906-1.61 3.839l.97.25c.22-.856.73-2.266 1.5-3.583zm3.36-3.326c-1.43.592-2.55 1.93-3.36 3.326l.86.506c.78-1.33 1.76-2.442 2.88-2.909z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M1835.64 134.699c.2-.084.34-.341.36-.63.02-.319-.11-.632-.32-.75-.62-.336-1.62-1.094-2.56-2.255-.93-1.16-1.78-2.683-2.14-4.536-.06-.32-.26-.528-.48-.528s-.42.208-.48.528c-.36 1.853-1.21 3.376-2.14 4.536-.94 1.161-1.94 1.919-2.56 2.255-.19.109-.32.382-.32.675 0 .319.14.614.36.705 1.28.53 2.32 1.755 3.12 3.118s1.32 2.816 1.55 3.711c.07.274.24.45.43.47.22.023.43-.161.51-.47.23-.895.75-2.348 1.55-3.711s1.84-2.588 3.12-3.118"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m1836 134.069-.5-.033zm-.36.63.19.462zm.04-1.38.23-.439zm-2.56-2.255-.38.314zm-2.14-4.536-.49.096zm-.48-.528v.5zm-.48.528.49.096zm-2.14 4.536-.39-.314zm-2.56 2.255-.23-.439zm-.32.675.5.003zm.36.705-.19.462zm3.12 3.118-.43.253zm1.55 3.711.49-.125zm.43.47.06-.497zm.51-.47-.49-.125zm1.55-3.711-.43-.253zm2.98-3.781a.6.6 0 0 1-.05.18c-.02.041-.03.033 0 .022l.38.923c.45-.187.64-.673.67-1.059zm-.06-.278c-.02-.01 0-.005.03.055.02.057.03.137.03.223l1 .066c.02-.426-.13-.975-.59-1.222zm-2.7-2.38c.97 1.208 2.02 2.01 2.7 2.38l.47-.878c-.55-.302-1.5-1.015-2.4-2.13zm-2.25-4.754c.38 1.947 1.27 3.542 2.25 4.754l.77-.628c-.89-1.109-1.69-2.558-2.04-4.319zm.01-.124c-.06 0-.08-.029-.07-.016s.04.056.06.14l.98-.193c-.08-.43-.41-.932-.97-.931zm.01.124a.4.4 0 0 1 .06-.14c.01-.013-.01.016-.07.016v-1c-.56-.001-.89.501-.97.931zm-2.25 4.754c.98-1.212 1.87-2.807 2.25-4.754l-.98-.193c-.35 1.761-1.15 3.21-2.04 4.319zm-2.7 2.38c.68-.37 1.73-1.172 2.7-2.38l-.77-.628c-.9 1.115-1.85 1.828-2.4 2.13zm-.06.239c0-.08.02-.149.04-.196.02-.05.04-.052.02-.043l-.47-.878c-.42.229-.59.718-.59 1.111zm.05.241c.03.012.02.019-.01-.032a.6.6 0 0 1-.04-.209l-1-.007c0 .232.05.465.15.667.1.199.27.4.52.504zm3.36 3.326c-.81-1.396-1.93-2.734-3.36-3.326l-.38.923c1.12.467 2.1 1.579 2.88 2.909zm1.61 3.839c-.24-.933-.78-2.43-1.61-3.839l-.86.506c.77 1.317 1.28 2.727 1.5 3.583zm0 .098c.04.005.06.026.05.016a.2.2 0 0 1-.05-.114l-.97.25c.1.386.39.791.86.842zm-.04-.098c-.02.079-.05.111-.05.116 0 .002 0-.004.02-.01a.15.15 0 0 1 .07-.008l-.11.994c.57.062.93-.417 1.04-.842zm1.61-3.839c-.83 1.409-1.37 2.906-1.61 3.839l.97.25c.22-.856.73-2.266 1.5-3.583zm3.36-3.326c-1.43.592-2.55 1.93-3.36 3.326l.86.506c.78-1.33 1.76-2.442 2.88-2.909z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M2022.36 143.422c.34-.143.56-.58.59-1.07.03-.521-.18-1.026-.53-1.219-1-.556-2.63-1.812-4.16-3.737-1.53-1.924-2.91-4.448-3.5-7.521-.1-.53-.43-.875-.78-.875-.36 0-.69.345-.79.875-.59 3.073-1.97 5.597-3.5 7.521-1.53 1.925-3.16 3.181-4.16 3.737-.31.172-.51.593-.53 1.052-.02.554.22 1.078.59 1.237 2.08.878 3.79 2.909 5.09 5.169s2.16 4.669 2.53 6.152c.12.467.41.762.73.781.03.002.05.002.08 0 .31-.024.6-.317.72-.781.38-1.483 1.23-3.893 2.53-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m2022.95 142.352-.5-.025zm-.59 1.07.19.461zm.06-2.289.24-.437zm-4.16-3.737.39-.311zm-3.5-7.521-.49.095zm-.78-.875v.5zm-.79.875.49.095zm-3.5 7.521.39.311zm-4.16 3.737.24.438zm-.53 1.052.5.022zm.59 1.237.2-.46zm5.09 5.169-.43.249zm2.53 6.152-.48.123zm.73.781-.03.499zm.08 0-.04-.499zm.72-.781.48.123zm2.53-6.152.43.249zm5.18-6.264c-.02.396-.2.598-.29.635l.39.921c.59-.249.87-.923.9-1.506zm-.27-.756c.11.063.29.337.27.756l1 .05c.03-.622-.21-1.359-.79-1.681zm-4.31-3.864c1.56 1.971 3.24 3.273 4.31 3.864l.48-.875c-.94-.521-2.52-1.733-4.01-3.611zm-3.6-7.737c.61 3.165 2.03 5.761 3.6 7.737l.78-.622c-1.49-1.873-2.82-4.324-3.4-7.305zm-.29-.47s.05.002.11.075c.07.074.14.204.18.395l.98-.19c-.12-.634-.57-1.281-1.27-1.28zm-.3.47a.8.8 0 0 1 .18-.395c.06-.073.11-.075.12-.075v-1c-.71-.001-1.16.646-1.28 1.28zm-3.6 7.737c1.57-1.976 2.99-4.572 3.6-7.737l-.98-.19c-.58 2.981-1.91 5.432-3.4 7.305zm-4.31 3.864c1.07-.591 2.75-1.893 4.31-3.864l-.78-.622c-1.49 1.878-3.07 3.09-4.01 3.611zm-.27.636c.02-.365.17-.581.27-.636l-.48-.875c-.52.289-.76.915-.79 1.467zm.29.755c-.05-.018-.12-.077-.19-.223a1.1 1.1 0 0 1-.1-.532l-1-.044c-.01.352.05.703.19 1.002.14.294.37.577.71.718zm5.33 5.379c-1.33-2.292-3.1-4.438-5.33-5.379l-.39.921c1.93.814 3.56 2.73 4.85 4.957zm2.58 6.279c-.39-1.521-1.26-3.974-2.58-6.279l-.87.499c1.28 2.215 2.11 4.581 2.48 6.026zm.27.405c-.01 0-.05-.006-.11-.068a.74.74 0 0 1-.16-.337l-.97.246c.14.576.56 1.119 1.18 1.157zm.01 0h-.01l-.06.998c.05.003.1.003.14-.001zm.28-.405a.85.85 0 0 1-.17.335c-.06.063-.1.069-.11.07l.07.997c.62-.046 1.03-.584 1.17-1.156zm2.58-6.279c-1.33 2.305-2.2 4.758-2.58 6.279l.96.246c.37-1.445 1.21-3.811 2.48-6.026zm5.32-5.379c-2.23.941-4 3.087-5.32 5.379l.86.499c1.29-2.227 2.92-4.143 4.85-4.957z" />
        </g>

        <g fill="currentcolor" className={style.star}>
          <path
            d="M2490.64 97.7c.2-.085.34-.342.36-.631.02-.32-.11-.632-.32-.75-.62-.336-1.62-1.094-2.56-2.255-.93-1.16-1.78-2.683-2.14-4.536-.06-.32-.26-.528-.48-.528s-.42.208-.48.528c-.36 1.853-1.21 3.376-2.14 4.536-.94 1.161-1.94 1.92-2.56 2.255-.19.108-.32.382-.32.674 0 .32.14.615.36.706 1.28.53 2.32 1.755 3.12 3.118s1.32 2.816 1.55 3.711c.07.274.24.45.43.47.22.023.43-.161.51-.47.23-.895.75-2.348 1.55-3.711s1.84-2.588 3.12-3.117"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m2491 97.069-.5-.033zm-.36.63.19.462zm.04-1.38.23-.44zm-2.56-2.255-.38.315zm-2.14-4.536-.49.096zm-.48-.528v.5zm-.48.528.49.096zm-2.14 4.536-.39-.314zm-2.56 2.255-.23-.44zm-.32.674.5.004zm.36.706-.19.462zm3.12 3.118-.43.253zm1.55 3.711.49-.125zm.43.47.06-.497zm.51-.47-.49-.125zm1.55-3.711-.43-.253zm2.98-3.78a.6.6 0 0 1-.05.179c-.02.04-.03.033 0 .022l.38.923c.45-.187.64-.673.67-1.06zm-.06-.28c-.02-.009 0-.005.03.056a.7.7 0 0 1 .03.223l1 .066c.02-.426-.13-.975-.59-1.222zm-2.7-2.379c.97 1.208 2.02 2.01 2.7 2.38l.47-.878c-.55-.301-1.5-1.015-2.4-2.13zm-2.25-4.754c.38 1.947 1.27 3.542 2.25 4.755l.77-.629c-.89-1.11-1.69-2.558-2.04-4.319zm.01-.124c-.06 0-.08-.029-.07-.016s.04.056.06.14l.98-.193c-.08-.43-.41-.932-.97-.931zm.01.124a.4.4 0 0 1 .06-.14c.01-.013-.01.016-.07.016v-1c-.56 0-.89.501-.97.931zm-2.25 4.755c.98-1.213 1.87-2.808 2.25-4.755l-.98-.193c-.35 1.76-1.15 3.21-2.04 4.32zm-2.7 2.379c.68-.37 1.73-1.172 2.7-2.38l-.77-.628c-.9 1.115-1.85 1.829-2.4 2.13zm-.06.239c0-.08.02-.149.04-.196.02-.05.04-.052.02-.043l-.47-.878c-.42.229-.59.718-.59 1.11zm.05.24c.03.013.02.02-.01-.031a.6.6 0 0 1-.04-.21l-1-.006c0 .233.05.466.15.667.1.2.27.4.52.504zm3.36 3.327c-.81-1.396-1.93-2.734-3.36-3.326l-.38.923c1.12.467 2.1 1.579 2.88 2.909zm1.61 3.839c-.24-.933-.78-2.43-1.61-3.839l-.86.506c.77 1.317 1.28 2.727 1.5 3.583zm0 .098c.04.005.06.026.05.016a.2.2 0 0 1-.05-.114l-.97.25c.1.386.39.791.86.842zm-.04-.098c-.02.079-.05.111-.05.116 0 .002 0-.004.02-.01a.15.15 0 0 1 .07-.008l-.11.994c.57.062.93-.417 1.04-.842zm1.61-3.839c-.83 1.409-1.37 2.906-1.61 3.839l.97.25c.22-.856.73-2.266 1.5-3.583zm3.36-3.326c-1.43.592-2.55 1.93-3.36 3.326l.86.506c.78-1.33 1.76-2.442 2.88-2.909z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M2735.36 140.422c.34-.143.56-.58.59-1.07.03-.521-.18-1.026-.53-1.219-1-.556-2.63-1.812-4.16-3.737-1.53-1.924-2.91-4.448-3.5-7.521-.1-.53-.43-.875-.78-.875-.36 0-.69.345-.79.875-.59 3.073-1.97 5.597-3.5 7.521-1.53 1.925-3.16 3.181-4.16 3.737-.31.172-.51.593-.53 1.052-.02.554.22 1.078.59 1.237 2.08.878 3.79 2.909 5.09 5.169s2.16 4.669 2.53 6.152c.12.467.41.762.73.781.03.002.05.002.08 0 .31-.024.6-.317.72-.781.38-1.483 1.23-3.893 2.53-6.152s3.01-4.291 5.09-5.169"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m2735.95 139.352-.5-.025zm-.59 1.07.19.461zm.06-2.289.24-.437zm-4.16-3.737.39-.311zm-3.5-7.521-.49.095zm-.78-.875v.5zm-.79.875.49.095zm-3.5 7.521.39.311zm-4.16 3.737.24.438zm-.53 1.052.5.022zm.59 1.237.2-.46zm5.09 5.169-.43.249zm2.53 6.152-.48.123zm.73.781-.03.499zm.08 0-.04-.499zm.72-.781.48.123zm2.53-6.152.43.249zm5.18-6.264c-.02.396-.2.598-.29.635l.39.921c.59-.249.87-.923.9-1.506zm-.27-.756c.11.063.29.337.27.756l1 .05c.03-.622-.21-1.359-.79-1.681zm-4.31-3.864c1.56 1.971 3.24 3.273 4.31 3.864l.48-.875c-.94-.521-2.52-1.733-4.01-3.611zm-3.6-7.737c.61 3.165 2.03 5.761 3.6 7.737l.78-.622c-1.49-1.873-2.82-4.324-3.4-7.305zm-.29-.47s.05.002.11.075c.07.074.14.204.18.395l.98-.19c-.12-.634-.57-1.281-1.27-1.28zm-.3.47a.8.8 0 0 1 .18-.395c.06-.073.11-.075.12-.075v-1c-.71-.001-1.16.646-1.28 1.28zm-3.6 7.737c1.57-1.976 2.99-4.572 3.6-7.737l-.98-.19c-.58 2.981-1.91 5.432-3.4 7.305zm-4.31 3.864c1.07-.591 2.75-1.893 4.31-3.864l-.78-.622c-1.49 1.878-3.07 3.09-4.01 3.611zm-.27.636c.02-.365.17-.581.27-.636l-.48-.875c-.52.289-.76.915-.79 1.467zm.29.755c-.05-.018-.12-.077-.19-.223a1.1 1.1 0 0 1-.1-.532l-1-.044c-.01.352.05.703.19 1.002.14.294.37.577.71.718zm5.33 5.379c-1.33-2.292-3.1-4.438-5.33-5.379l-.39.921c1.93.814 3.56 2.73 4.85 4.957zm2.58 6.279c-.39-1.521-1.26-3.974-2.58-6.279l-.87.499c1.28 2.215 2.11 4.581 2.48 6.026zm.27.405c-.01 0-.05-.006-.11-.068a.74.74 0 0 1-.16-.337l-.97.246c.14.576.56 1.119 1.18 1.157zm.01 0h-.01l-.06.998c.05.003.1.003.14-.001zm.28-.405a.85.85 0 0 1-.17.335c-.06.063-.1.069-.11.07l.07.997c.62-.046 1.03-.584 1.17-1.156zm2.58-6.279c-1.33 2.305-2.2 4.758-2.58 6.279l.96.246c.37-1.445 1.21-3.811 2.48-6.026zm5.32-5.379c-2.23.941-4 3.087-5.32 5.379l.86.499c1.29-2.227 2.92-4.143 4.85-4.957z" />
        </g>
        <g fill="currentcolor" className={style.star}>
          <path
            d="M2860.64 58.7c.2-.085.34-.342.36-.631.02-.32-.11-.632-.32-.75-.62-.336-1.62-1.094-2.56-2.255-.93-1.16-1.78-2.683-2.14-4.536-.06-.32-.26-.528-.48-.528s-.42.208-.48.528c-.36 1.853-1.21 3.376-2.14 4.536-.94 1.161-1.94 1.92-2.56 2.255-.19.108-.32.383-.32.674 0 .32.14.614.36.706 1.28.53 2.32 1.755 3.12 3.118s1.32 2.816 1.55 3.71c.07.275.24.45.43.471.22.023.43-.16.51-.47.23-.895.75-2.348 1.55-3.711s1.84-2.588 3.12-3.117"
            clipRule="evenodd"
            fillRule="evenodd"
          />
          <path d="m2861 58.069-.5-.033zm-.36.63.19.462zm.04-1.38.23-.44zm-2.56-2.255-.38.315zm-2.14-4.536-.49.096zm-.48-.528v.5zm-.48.528.49.096zm-2.14 4.536-.39-.314zm-2.56 2.255-.23-.44zm-.32.674.5.004zm.36.706-.19.462zm3.12 3.118-.43.253zm1.55 3.71.49-.124zm.43.471.06-.497zm.51-.47-.49-.125zm1.55-3.711-.43-.253zm2.98-3.78a.6.6 0 0 1-.05.179c-.02.04-.03.033 0 .022l.38.923c.45-.187.64-.673.67-1.06zm-.06-.28c-.02-.009 0-.005.03.056a.7.7 0 0 1 .03.223l1 .066c.02-.426-.13-.975-.59-1.222zm-2.7-2.378c.97 1.207 2.02 2.01 2.7 2.379l.47-.878c-.55-.302-1.5-1.015-2.4-2.13zm-2.25-4.755c.38 1.947 1.27 3.542 2.25 4.755l.77-.629c-.89-1.11-1.69-2.559-2.04-4.319zm.01-.124c-.06 0-.08-.029-.07-.017.01.014.04.057.06.141l.98-.193c-.08-.43-.41-.932-.97-.931zm.01.124a.4.4 0 0 1 .06-.14c.01-.013-.01.016-.07.016v-1c-.56 0-.89.501-.97.931zm-2.25 4.755c.98-1.213 1.87-2.808 2.25-4.755l-.98-.193c-.35 1.76-1.15 3.21-2.04 4.32zm-2.7 2.379c.68-.37 1.73-1.172 2.7-2.38l-.77-.628c-.9 1.115-1.85 1.828-2.4 2.13zm-.06.239c0-.08.02-.149.04-.196.02-.05.04-.052.02-.043l-.47-.878c-.42.229-.59.718-.59 1.11zm.05.24c.03.013.02.02-.01-.031a.6.6 0 0 1-.04-.21l-1-.006c0 .232.05.465.15.667.1.2.27.4.52.504zm3.36 3.327c-.81-1.396-1.93-2.734-3.36-3.326l-.38.923c1.12.467 2.1 1.579 2.88 2.909zm1.61 3.84c-.24-.934-.78-2.431-1.61-3.84l-.86.506c.77 1.317 1.28 2.727 1.5 3.583zm0 .097c.04.005.06.026.05.016a.2.2 0 0 1-.05-.114l-.97.25c.1.386.39.791.86.842zm-.04-.098c-.02.079-.05.111-.05.116 0 .002 0-.004.02-.01.02-.007.04-.01.07-.008l-.11.994c.57.062.93-.417 1.04-.842zm1.61-3.839c-.83 1.409-1.37 2.906-1.61 3.84l.97.249c.22-.856.73-2.266 1.5-3.583zm3.36-3.326c-1.43.592-2.55 1.93-3.36 3.326l.86.506c.78-1.33 1.76-2.442 2.88-2.909z" />
        </g>
      </g>
    </svg>
  );
}
