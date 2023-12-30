"use client";
import React from "react";
import Accordion from "../../../components/Accordion";
import Button from "../../../components/Form/Button";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";

const aboutItem = [
  {
    id: 1,
    title: "کارشناسی تخصصی خودرو در محل",
    desc: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
      >
        <path
          fill="url(#A)"
          fillRule="evenodd"
          d="M5.482 7.734a1.668 1.668 0 011.555-1.068h16.667c.517 0 1.005.24 1.32.65l6.907 8.966h1.032c1.445 0 2.818.597 3.819 1.637a5.59 5.59 0 011.551 3.876v7.692a1.663 1.663 0 01-1.666 1.667h-2.288C33.696 33.356 31.698 35 29.259 35s-4.437-1.644-5.119-3.846h-8.281C15.178 33.356 13.18 35 10.741 35s-4.437-1.644-5.119-3.846H3.333a1.663 1.663 0 01-1.667-1.667V17.949c0-.205.038-.408.111-.599l3.704-9.615zm.14 20.086c.682-2.202 2.68-3.846 5.119-3.846s4.437 1.644 5.119 3.846h8.281c.682-2.202 2.68-3.846 5.119-3.846s4.437 1.644 5.119 3.846H35v-6.026c0-.598-.229-1.159-.619-1.563a1.97 1.97 0 00-1.418-.616H5v8.205h.622zm.139-11.538h12.572V10H8.181l-2.42 6.282zM21.667 10v6.282h6.057L22.884 10h-1.217zM10.741 27.308c-1.066 0-2.037.916-2.037 2.179s.971 2.179 2.037 2.179 2.037-.916 2.037-2.179-.971-2.179-2.037-2.179zm18.519 0c-1.066 0-2.037.916-2.037 2.179s.971 2.179 2.037 2.179 2.037-.916 2.037-2.179-.971-2.179-2.037-2.179z"
        ></path>
        <defs>
          <linearGradient
            id="A"
            x1="1.667"
            x2="16.965"
            y1="35"
            y2="-5.216"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5d3cf2"></stop>
            <stop offset="1" stopColor="#fd5631"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: "محاسبه دقیق قیمت خودرو",
    desc: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
      >
        <path
          fill="url(#A)"
          d="M35.667 4.333c-.667-.667-1.5-1-2.333-1H16.667c-.833 0-1.667.333-2.333 1s-1 1.5-1 2.333v6.667a1.51 1.51 0 00-1.167.5l-8.333 8.333a1.51 1.51 0 00-.5 1.167V35c0 .833.833 1.667 1.667 1.667h30c.833 0 1.667-.833 1.667-1.667V6.667c0-.833-.333-1.667-1-2.333zM20 33.333h-5v-5c0-.833-.833-1.667-1.667-1.667s-1.667.833-1.667 1.667v5h-5V24l6.667-6.667L20 24v9.333zm13.333 0h-10v-10a1.51 1.51 0 00-.5-1.167L16.667 16V6.667h16.667v26.667z"
        ></path>
        <path
          fill="url(#A)"
          d="M23.334 11.667c0 1-.833 1.667-1.667 1.667S20 12.5 20 11.667 20.834 10 21.667 10s1.667.833 1.667 1.667zM30 11.667c0 1-.833 1.667-1.667 1.667s-1.667-.833-1.667-1.667S27.5 10 28.334 10 30 10.833 30 11.667zM30 18.333c0 1-.833 1.667-1.667 1.667s-1.667-.833-1.667-1.667.833-1.667 1.667-1.667S30 17.5 30 18.333zM30 25c0 1-.833 1.667-1.667 1.667s-1.667-.833-1.667-1.667.833-1.667 1.667-1.667S30 24.167 30 25z"
        ></path>
        <defs>
          <linearGradient
            id="A"
            x1="3.334"
            x2="24.794"
            y1="36.667"
            y2="-6.928"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5d3cf2"></stop>
            <stop offset="1" stopColor="#fd5631"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "خرید خودروهای کارشناسی‌شده",
    desc: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
      >
        <g fill="url(#A)" fillRule="evenodd">
          <path d="M8.334 6.667c.92 0 1.667.746 1.667 1.667V35a1.667 1.667 0 11-3.334 0V8.333c0-.92.746-1.667 1.667-1.667zM31.667 6.667c.921 0 1.667.746 1.667 1.667v15A1.667 1.667 0 1130 23.333v-15c0-.92.746-1.667 1.667-1.667z"></path>
          <path d="M14.167 7.618A6.665 6.665 0 009.5 9.524a1.666 1.666 0 11-2.333-2.381 10 10 0 0114 0 6.665 6.665 0 009.334 0 1.666 1.666 0 012.334 2.381 10 10 0 01-14 0 6.665 6.665 0 00-4.667-1.906zM14.167 22.618A6.665 6.665 0 009.5 24.524a1.666 1.666 0 11-2.333-2.381 10 10 0 0114 0 6.67 6.67 0 009.334 0 1.666 1.666 0 012.334 2.381 10 10 0 01-14 0 6.67 6.67 0 00-4.667-1.906z"></path>
        </g>
        <defs>
          <linearGradient
            id="A"
            x1="6.667"
            x2="29.838"
            y1="36.667"
            y2="-2.096"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5d3cf2"></stop>
            <stop offset="1" stopColor="#fd5631"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const aboutLogos = [
  {
    id: 1,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="196"
        height="80"
        fill="#fff"
        fillRule="evenodd"
      >
        <path d="M38 30.376h4.665c1.981 0 3.686 0 5.442 1.48 1.205 1.103 1.756 2.533 1.756 4.263s-.552 3.16-1.756 4.264c-1.755 1.479-3.46 1.479-5.442 1.479h-1.229v7.073H38V30.376zm3.436 8.276h1.103c1.48 0 3.887-.1 3.887-2.533s-2.357-2.532-3.761-2.532h-1.229v5.066zm12.522-8.276h5.693c2.132 0 3.461.401 4.515 1.254s2.182 2.357 2.182 4.489c0 1.229-.451 3.16-1.781 4.44-1.103 1.052-2.157 1.303-3.085 1.529l5.041 6.846H62.36l-4.915-7.098h-.05v7.098h-3.436V30.376h-.001zm3.437 8.878h2.207c2.834 0 3.311-1.881 3.311-2.86 0-1.028-.627-2.808-3.311-2.808h-2.207v5.668zM79.32 30c5.266 0 9.706 4.213 9.706 9.705 0 5.317-4.364 9.606-9.706 9.606s-9.706-4.289-9.706-9.606c0-5.492 4.439-9.705 9.706-9.705zm0 16.101c3.536 0 6.27-2.984 6.27-6.42 0-3.562-2.784-6.471-6.27-6.471s-6.27 2.909-6.27 6.471c0 3.436 2.734 6.42 6.27 6.42zm37.135-15.725h9.981v3.21h-6.545v4.539h6.27v3.211h-6.27v4.389h6.545v3.21h-9.981V30.376zm15.116 0h5.693c2.133 0 3.462.401 4.516 1.254s2.181 2.357 2.181 4.489c0 1.229-.452 3.16-1.781 4.44-1.103 1.052-2.157 1.303-3.085 1.529l5.041 6.846h-4.164l-4.915-7.098h-.049v7.098h-3.437V30.376zm3.437 8.878h2.206c2.834 0 3.311-1.881 3.311-2.86 0-1.028-.627-2.808-3.311-2.808h-2.206v5.668zm16.094-5.668h-3.435v-3.21H158v3.21h-3.46v15.349h-3.438V33.587zm-55.211-.483h2.7l3.712 10.555h.037l3.732-10.555h2.7l-5.382 13.874h-2.1l-5.4-13.874zm-3.035-2.745v18.564h18.563V30.358H92.856z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="196"
        height="80"
        fill="none"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M53.642 21c8.578 0 15.579 7.008 15.579 15.586 0 .733-.049 1.451-.147 2.155 1.98-1.723 4.686-2.796 7.922-2.796 5.579 0 9.463 3.229 11.158 7.803l-11.681 6.757-2.183-3.835 6.06-3.619c-1.088-1.137-2.308-1.353-3.18-1.353-3.006 0-4.797 2.441-4.797 5.013s1.966 5.272 5.453 5.272c2.657 0 4.965-1.611 6.234-4.009l4.317 4.009c-2.531 3.885-6.716 6.2-11.207 6.2-6.889 0-11.771-5.021-11.771-11.297v-.104c-2.859 3.299-7.071 5.39-11.758 5.39a15.49 15.49 0 01-5.837-1.144v-8.724a8.147 8.147 0 005.837 2.462 8.2 8.2 0 008.18-8.18c0-4.505-3.675-8.187-8.18-8.187-7.35.488-8.041 6.904-7.943 12.232v9.344a.95.95 0 01-.119-.07v7.832L38 57.834V38.65c0-.53.014-1.088.063-1.659 0-.133-.007-.272-.007-.405C38.056 28.008 45.065 21 53.642 21zm43.082 36.737V45.358c0-1.652.781-2.964 2.399-2.964 1.611 0 2.392 1.312 2.392 2.964v12.379h6.98V45.798c0-2.183-.307-6.06-4.058-8.459-1.569-1.004-3.438-1.395-5.313-1.395s-3.752.391-5.321 1.395c-3.745 2.399-4.052 6.276-4.052 8.459v11.938h6.973zm61.255 0l.021-4.303c-4.067.321-5.377-.606-5.335-3.277v-22.93h-6.973V52.61c.013 3.487 2.036 4.798 4.972 5.126h7.315zm-40.787-21.353v-5.063h-6.974v16.827c0 2.922-.084 5.321 2.182 7.454 2.225 2.092 5.014 2.135 7.928 2.135h1.918v-6.36c1.716 4.017 5.739 6.806 10.871 6.806 4.491 0 8.669-2.315 11.193-6.2l-4.316-4.009c-1.256 2.398-3.565 4.009-6.22 4.009-3.488 0-5.453-2.698-5.453-5.272s1.791-5.013 4.797-5.013c.871 0 2.092.216 3.181 1.353l-6.06 3.619 2.182 3.835 11.673-6.757c-1.701-4.574-5.572-7.803-11.151-7.803-5.299 0-9.176 2.873-10.78 6.778v-6.339h-4.971zm5.055 14.993h-.955c-1.437 0-2.657-.041-3.312-.614-.963-.823-.788-2.483-.788-3.437v-4.582h4.964a10.85 10.85 0 00-.809 4.142 11.543 11.543 0 00.9 4.491z"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="196"
        height="80"
        fill="#fff"
      >
        <path d="M143.672 29a.785.785 0 00-.557.231.79.79 0 00-.232.557v5.519h14.583l-6.641-6.305-7.153-.002zM158 36.977a.78.78 0 00-.06-.301.76.76 0 00-.171-.255.79.79 0 00-.557-.229h-5.519v14.582l6.304-6.642.003-7.153zm-7.979 14.325a.79.79 0 00.786-.788v-5.519h-14.582l6.639 6.305 7.157.002zm-14.329-7.976a.78.78 0 00.06.301.76.76 0 00.171.256.78.78 0 00.255.171.79.79 0 00.302.06h5.519V29.531l-6.306 6.641-.001 7.154zM68.851 31.661v6.734h-9.383v-6.734l-3.416-.001v16.98h3.416v-7.295h9.383v7.295h3.422V31.661h-3.422zm45.46 0v16.975l14.993-.001-1.9-2.987h-9.665v-4.303h9.359v-2.879h-9.359V34.58h9.65l1.861-2.919h-14.939zm-70.96-.002c-3.556 0-5.351 2.159-5.351 5.304v6.339c0 3.638 2.313 5.338 5.333 5.338l10.719-.002-1.986-3.103h-8.072c-1.714 0-2.461-.619-2.461-2.539v-5.75c0-1.856.628-2.58 2.506-2.58h8.11l1.908-3.007H43.351zm55.965-.005c-2.054 0-4.156 1.233-4.156 4.407v.815c0 3.307 2.025 4.571 4.049 4.58h7.11c.738 0 1.338.122 1.338 1.371v1.443c-.019 1.119-.58 1.378-1.363 1.378H96.94l-1.916 2.987h11.488c2.772 0 4.653-1.378 4.653-4.563v-1.17c0-3.079-1.747-4.532-4.457-4.532h-6.789c-.753 0-1.277-.207-1.277-1.322l-.001-1.173c0-.949.361-1.296 1.237-1.296l8.907-.003 1.862-2.925-11.332.003zm-17.113.01l-8.051 16.974h3.806l1.568-3.506h8.748l1.563 3.506h3.821l-8.07-16.974h-3.385zm1.687 3.523l3.094 7.056h-6.168l3.075-7.056z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="196"
        height="80"
        fill="#fff"
        fillRule="evenodd"
      >
        <path d="M59.109 20l10.046 10.071-10.046 10.045-10.045-10.069L59.109 20zM48.045 31.186l10.044 10.071-10.044 10.045L38 41.23l10.045-10.045zm22.097-.14l10.045 10.071-10.045 10.045L60.097 41.09l10.045-10.045zm29.687 18.675l-3.374-8.135c2.205-1.007 3.292-2.477 3.292-4.925 0-1.823-.735-3.482-2.285-4.464-1.389-.925-3.185-1.141-4.816-1.141H83.15v18.665h5.796v-7.126h1.795l2.722 7.127h6.367v-.001zM88.945 38.594v-3.565h2.313c.542 0 1.141 0 1.632.245.572.299.898.897.898 1.524 0 1.603-1.496 1.795-2.748 1.795h-2.095v.001zm45.319 11.127h5.847l-5.847-18.665h-6.042l-5.795 18.665h4.651l1.144-3.673h4.978l1.064 3.673zm-5.091-7.753l1.526-5.415 1.522 5.415h-3.048zM158 45.151h-7.319V31.056h-5.767v18.665H158v-4.57zm-39.37.108h-8.407v-3.021h6.804v-4.162h-6.804v-2.72h8.407v-4.3h-14.012v18.665h14.012v-4.462zm-66.435 8.094a7.1 7.1 0 017.102-7.101 7.1 7.1 0 017.101 7.101 7.102 7.102 0 01-14.203 0zm94.379.326c.73.543 1.096 1.239 1.096 2.083 0 .915-.419 1.676-1.254 2.283-.982.712-2.381 1.068-4.198 1.068-1.699 0-3.032-.309-4.004-.935-.867-.602-1.3-1.359-1.3-2.278 0-.828.37-1.539 1.112-2.128.952-.757 2.359-1.136 4.221-1.136 1.947 0 3.389.347 4.327 1.043zm-15.069 1.934c.7 0 1.254-.078 1.661-.233s.616-.438.616-.843c0-.438-.286-.735-.855-.894-.307-.084-.716-.124-1.227-.124h-3.65v2.093h3.455v.001zm13.746 1.973c.592-.524.888-1.128.888-1.811 0-.722-.342-1.299-1.023-1.739s-1.603-.659-2.778-.66c-1.143 0-2.073.218-2.796.656s-1.08 1.075-1.08 1.925c0 .676.307 1.249.923 1.718s1.625.697 3.012.697c1.317-.001 2.268-.262 2.854-.786zm-18.696-4.782h5.107c.841 0 1.537.068 2.081.207 1.038.26 1.554.744 1.554 1.447a1.13 1.13 0 01-.412.903c-.27.233-.652.42-1.143.561l1.977 3.013h-1.438a93.58 93.58 0 01-1.701-2.639c-.285-.073-.516.011-1.127.011h-3.403v2.629h-1.494v-6.131h-.001zm23.868 4.156c.037.349.183.63.443.845.498.408 1.371.61 2.623.61a8.36 8.36 0 001.531-.13c.894-.173 1.336-.484 1.339-.928 0-.335-.188-.571-.565-.712s-.977-.263-1.786-.364l-1.496-.189c-.978-.12-1.667-.256-2.071-.404-.702-.253-1.052-.639-1.052-1.146 0-.554.343-1.004 1.028-1.359s1.658-.529 2.914-.529c1.158 0 2.138.156 2.945.47.811.307 1.218.803 1.218 1.483h-1.405a1.23 1.23 0 00-.483-.754c-.455-.32-1.229-.48-2.32-.48-.88 0-1.514.101-1.899.308s-.578.447-.578.719c0 .3.226.52.675.66.296.088.964.197 2.006.332l1.547.196c.746.095 1.321.224 1.727.389.701.287 1.052.701 1.052 1.247 0 .679-.445 1.164-1.336 1.456s-1.92.439-3.095.439c-1.373 0-2.447-.196-3.224-.585s-1.156-.911-1.141-1.572h1.403v-.001zm-33.536-4.154v3.791a1.49 1.49 0 00.449 1.108c.446.447 1.197.669 2.255.669 1.266 0 2.128-.24 2.583-.723.245-.262.368-.612.368-1.055v-3.791h1.518v3.445c0 .754-.184 1.333-.548 1.74-.671.74-1.938 1.11-3.801 1.11s-3.127-.369-3.794-1.11c-.365-.407-.548-.987-.548-1.74v-3.445h1.518zm-6.131.178c1.096.32 1.768.881 2.015 1.682h-1.482c-.18-.448-.554-.774-1.119-.976s-1.28-.308-2.141-.311c-1.02 0-1.883.213-2.583.641s-1.044 1.059-1.044 1.901a2.17 2.17 0 00.863 1.782c.578.456 1.517.684 2.817.684.996 0 1.822-.16 2.471-.48.656-.323.991-.843 1.007-1.56h-3.454v-.688h4.844v3.278h-.96l-.362-.788c-.506.311-.953.524-1.345.644-.655.206-1.489.308-2.499.308-1.309 0-2.433-.235-3.374-.705-1.027-.589-1.539-1.399-1.539-2.429s.501-1.843 1.501-2.45c.951-.579 2.183-.868 3.697-.868 1.036 0 1.931.112 2.687.335zm-17.575-.178h8.044v.754h-6.587v1.859h6.091v.711h-6.091v2.079h6.7v.728h-8.157v-6.131zm-9.427 4.154a1.21 1.21 0 00.442.845c.497.408 1.371.61 2.622.61a8.37 8.37 0 001.532-.13c.892-.173 1.337-.484 1.338-.928 0-.335-.188-.571-.565-.712s-.976-.263-1.786-.364l-1.496-.189c-.977-.12-1.667-.256-2.074-.404-.701-.253-1.05-.639-1.05-1.146 0-.554.342-1.004 1.028-1.359s1.658-.529 2.913-.529c1.157 0 2.138.156 2.944.47.812.307 1.218.803 1.218 1.483h-1.404a1.226 1.226 0 00-.482-.754c-.455-.32-1.229-.48-2.32-.48-.881 0-1.514.101-1.9.308s-.578.447-.578.719c0 .3.226.52.675.66.296.088.964.197 2.005.332l1.548.196c.746.095 1.321.224 1.727.389.701.287 1.053.701 1.053 1.247 0 .679-.447 1.164-1.337 1.456s-1.92.439-3.094.439c-1.373 0-2.448-.196-3.224-.585s-1.156-.911-1.142-1.572h1.406v-.001z"></path>
      </svg>
    ),
  },
  {
    id: 5,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="196"
        height="80"
        fill="#fff"
        fillRule="evenodd"
      >
        <path d="M79.729 44.955h1.597c1.795 0 3.84.198 3.84 2.336 0 1.998-1.99 2.277-3.896 2.277h-1.54v-4.612h-.001zm-5.208 8.328h8.234c3.503 0 7.622-.986 7.622-5.681 0-2.392-1.347-3.798-3.949-4.336v-.056c2.184-.732 3.445-2.108 3.445-4.584 0-3.376-2.718-4.979-6.359-4.979h-8.993v19.637zm5.208-15.923h1.515c1.736 0 3.416.167 3.416 1.969 0 1.657-1.764 2.082-3.472 2.082h-1.459v-4.05zm30.816 8.468c0 5.372-3.474 7.791-8.574 7.791s-8.576-2.42-8.576-7.791V33.646h5.212v11.309c0 2.587.7 4.782 3.362 4.782s3.362-2.195 3.362-4.782V33.646h5.211v12.183h.002zm3.971-12.183h5.213v19.637h-5.213V33.646zm9.959 0h5.21V49.4h8.072v3.883h-13.282V33.646zm20.05 3.881h2.016c3.811 0 6.08 2.027 6.08 5.936s-2.184 5.938-6.08 5.938h-2.016V37.527zm-5.212 15.756h7.114c6.671 0 11.573-2.56 11.573-9.903 0-7.597-4.763-9.735-11.573-9.735h-7.114v19.637zM47.857 24.071l12.107 1.675 2.226 38.171s-13.962 4.456-14.704 4.269l.371-44.114z"></path>
        <path d="M59.575 26.105l-11.774-1.628.112-.811L60.02 25.34l.353.382 2.226 38.171-.284.414-.124-.39.124.39-.157.05-.445.141L60.12 65l-4.884 1.512-5.03 1.479-1.783.463-.586.118-.218.025a.798.798 0 01-.233-.016l.2-.794c-.02-.005-.035-.006-.04-.007h.022a1.74 1.74 0 00.142-.017l.529-.107 1.748-.454 5.01-1.473 4.877-1.51 1.591-.502.298-.094-2.188-37.518zm-12.03 41.677z"></path>
        <path d="M47.486 68.185l-9.076-5.191 1.529-34.642 7.919-4.282-.371 44.115z"></path>
        <path d="M40.337 28.603L38.83 62.764l8.253 4.72.36-42.722-7.105 3.842zm-.594-.61l7.919-4.282.604.364-.371 44.115-.613.352-9.076-5.191-.206-.374 1.529-34.642.214-.342zm19.851-5.779l-12.038-2.055.159-8.749 11.172 2.792.707 8.013z"></path>
        <path d="M47.464 11.085a.41.41 0 01.348-.072l11.171 2.792a.41.41 0 01.309.361L60 22.178l-.408.036-.069.404-12.038-2.055a.41.41 0 01-.341-.411l.159-8.749a.41.41 0 01.16-.318zm11.673 10.637l-.635-7.193-10.389-2.596-.144 7.883 11.167 1.907z"></path>
        <path d="M40.227 24.629l7.329-4.47.159-8.749-7.036 5.212-.452 8.007z"></path>
        <path d="M40.435 16.293l7.036-5.212.653.337-.159 8.749-.196.342-7.329 4.47-.213-.35-.409-.023.452-8.007.165-.306zm.244 7.58l6.471-3.947.14-7.692-6.214 4.603-.398 7.036z"></path>
      </svg>
    ),
  },
  {
    id: 6,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="196"
        height="80"
        fill="#fff"
      >
        <path d="M72.377 34.794c5.457 0 7.634 1.399 7.657 4.847.003.675-.081 1.43-.256 2.269l-2.422 11.698c-.44 2.127-.644 3.607-.452 4.794h-6.628c0-.072-.011-.142-.011-.217l.148-2.486h-.368l-.145.229c-1.19 1.912-3.891 3.094-6.204 3.094-4.03 0-5.583-2.185-4.705-6.447.903-4.368 2.89-6.216 7.869-7.333l3.308-.752c1.96-.432 2.907-1.299 3.256-2.991.368-1.784-.404-2.812-2.065-2.812-1.77 0-2.712.914-3.297 3.192H62.15c1.597-6.14 7.055-7.083 10.229-7.083zm-.073 12.044s-.134.123-.39.223c-.418.162-1.346.312-1.92.457-.446.111-.948.24-1.491.465-1.444.61-2.188 1.614-2.573 3.453-.39 1.884.418 3.208 1.895 3.208 2.581 0 3.392-2.472 3.777-4.331l.719-3.478h-.017l-.702 3.478.702-3.476zm23.751 9.499c-1.397-1.717-1.672-4.415-.708-9.226 2.107-10.469 6.085-12.317 9.547-12.317 1.647 0 4.122.61 4.415 3.498l.047.449h.482l.686-3.323h6.436l-4.78 22.984c-1.135 5.491-4.661 8.225-11.127 8.225-5.99 0-6.879-3.534-7.016-4.624-.053-.415.086-1.642.086-1.642h6.266v.003c.002.56.044 1.382.234 1.614.259.321.473.697 1.466.697 1.318 0 2.581-.379 3.197-3.359l1.065-5.159h-.511l-.144.242c-1.283 2.221-3.671 3.345-6.191 3.345-1.55-.003-2.681-.457-3.451-1.408zm6.392-9.733c-.703 3.409-.672 4.716.016 5.563.343.421.856.624 1.561.624 1.96 0 2.913-1.187 3.908-5.984.708-3.434.783-5.616.103-6.453-.334-.407-.822-.608-1.497-.608-2.021 0-3.102 2.06-4.091 6.857zm24.834-11.185l-4.752 22.984h-6.968l4.758-22.984h6.962zm12.8-7.668L133.739 58.4h-6.968l6.341-30.649h6.969zm11.171 0L144.905 58.4h-6.965l6.341-30.649h6.971zm-54.204 7.044c-2.283 0-5.003 1.597-6.33 4.167l-.137.265h-.51l.786-3.808h-.597v-.003h-6.628c.15.937.059 2.052-.206 3.529l-4.028 19.458h6.971l2.62-12.682c.655-3.166 2.511-4.641 5.837-4.641.574 0 1.079.034 1.572.103l1.324-6.388h-.674zM39.37 57.204c-1.739-2.138-1.817-6.065-.265-13.56 2.481-11.985 6.065-16.03 14.207-16.03 6.506 0 8.992 3.041 7.668 9.407l-.334 1.603h-6.859s.51-3.272.505-3.994c-.006-.811-.033-1.249-.346-1.658a1.84 1.84 0 00-1.55-.764c-3.033 0-4.028 2.888-5.753 11.233-1.341 6.478-1.82 9.452-.786 10.723.393.479.984.714 1.814.714 2.386 0 3.328-2.046 4.529-7.743h6.91l-.365 1.75c-1.452 7.024-5.569 10.586-12.236 10.586-3.612-.003-5.878-.725-7.138-2.266zm113.362-29.47h2.09l-.069.334h-.861l-.619 2.996h-.368l.619-2.996h-.862l.07-.334zm4.621 0H158l-.688 3.331h-.368l.652-3.164h-.009c-.136.318-1.452 3.164-1.452 3.164h-.437l-.142-3.164h-.009c-.053.29-.644 3.164-.644 3.164h-.37l.688-3.331h.652l.115 2.601a2.63 2.63 0 01-.034.493h.011c.117-.337 1.388-3.094 1.388-3.094zm-29.472 4.973c.546-12.632-14.687-22.114-28.899-19.165S77.904 28.86 76.109 32.682h2.325c3.111-5.232 6.26-9.293 11.629-10.806 3.412-.962 6.09-.741 12.685 2.938 3.038 1.695 9.911 6.793 17.295 7.81 3.205.443 7.838.084 7.838.084z"></path>
      </svg>
    ),
  },
];

const About = () => {
  return (
    <main className="mt-20 xl:container mx-auto sm:px-8">
      <div className="relative">
        <Image
          src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703832256/zswyq7kcmyilzyjtgdld.jpg"
          alt="about-car"
          width={880}
          height={400}
          className="2xl:w-[64rem] object-contain"
        />
        <div className="absolute md:top-36 sm:top-24 top-16 left-4">
          <h2 className="text-3xl">درباره ما</h2>
          <p className="text-gray-200 max-w-[28rem] sm:mt-8 mt-4">
            درباره ما ما معتقدیم که خرید و فروش خودرو باید ساده و لذت بخش باشد،
            نه زمان بر، پیچیده یا استرس زا.
          </p>
          <Button href="/car">جستجو خودرو</Button>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="my-8 text-center text-3xl">چرا همراه مکانیک؟</h2>

        <div className="grid sm:grid-cols-3">
          {aboutItem.map((item) => (
            <div
              className="m-auto mx-5 text-center rounded-xl bg-black-100 md:p-5 p-2 group sm:my-0 my-4"
              key={item.id}
            >
              <div className="flex justify-center group-hover:bg-white rounded-lg duration-300 w-14 h-14 m-auto">
                {item.img}
              </div>
              <h2 className="my-4 mt-6 text-lg">{item.title}</h2>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-24">
        <div>
          <Image
            src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703961902/jkgt7zpkeojnsqomcbtr.jpg"
            className="rounded-lg object-contain"
            alt="car"
            width={600}
            height={600}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:px-8 px-4">
            <h2 className="my-8 text-3xl">شرایط فروش خودرو</h2>
            <p className="text-sm text-gray-200 max-w-[28rem]">
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.
            </p>
            <Button href="/car">فروش خودرو</Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-24">
        <div className="flex justify-center items-center">
          <div className="md:px-8 px-4">
            <h2 className="my-8 text-3xl">جستجوی ماشین</h2>
            <p className="text-sm text-gray-200 max-w-[28rem] mb-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <Button href="/car">جستجو خودرو</Button>
          </div>
        </div>

        <div>
          <Image
            src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703962019/xlelzaxmasew8zs5akfv.jpg"
            className="rounded-lg object-contain"
            alt="car"
            width={600}
            height={600}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-6 grid-cols-3 mt-24">
        {aboutLogos.map((item) => (
          <React.Fragment key={item.id}>{item.img}</React.Fragment>
        ))}
      </div>

      <div className="grid md:grid-cols-2 mt-24 px-4">
        <div>
          <h2 className="my-8 text-3xl">سوالات متداول</h2>
          <p className="text-gray-200 max-w-[32rem]">
            آیا در مورد خرید یا فروش خودرو سوالی دارید؟ برای همه جزئیات، مرکز
            راهنمایی را بررسی کنید.موجود در ارائه راهکارها و شرایط سخت تایپ به
            پایان رسد.
          </p>
          <Button href="help-center">
            <Link href="/help-center">پشتیبانی</Link>
            <FaAngleLeft />
          </Button>
          <Image
            src="https://res.cloudinary.com/dmywzd0yw/image/upload/…uto/v1703763039/ppfknymlc1lgjfvc9n6v?_a=BAVAZFAO0"
            alt="car"
            height={500}
            width={500}
          />
        </div>
        <div>
          <Accordion
            title="هزینه فروش خودرو در فایندر چقدر است؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
          <Accordion
            title="چگونه بهترین عکس ها را از ماشینم بگیرم؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت"
          />
          <Accordion
            title="اگر خارج از ایالات متحده زندگی می کنم می توانم وسیله نقلیه بفروشم؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
          <Accordion
            title="خریدار چگونه با من در تماس است و پرداخت را انجام می دهد؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت."
          />
          <Accordion
            title="چه کسی شرح لیست ماشین من را می نویسد؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
          <Accordion
            title="کارشاپ از چه ارزی استفاده می کند؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت."
          />
          <Accordion
            title="آیا قوانینی برای رعایت در نظرات وجود دارد؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت."
          />
          <Accordion
            title="چگونه به صورت خصوصی با فروشنده تماس بگیرم؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
        </div>
      </div>
    </main>
  );
};

export default About;
