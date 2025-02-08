interface Props {
  className: string;
}
export default function StarSeparator({ className }: Props) {
  const classN = "text-[0.75em] content-center";
  return (
    <div className={className || classN}>
      <svg
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6367 6.48089C10.8486 6.42034 10.9893 6.23182 10.9989 6.02317C11.0088 5.81221 10.8833 5.60984 10.6749 5.53169C10.0598 5.30106 9.06067 4.77989 8.1235 3.9817C7.18643 3.18361 6.34421 2.13698 5.98007 0.862494C5.91728 0.642749 5.71691 0.49956 5.49918 0.499725C5.28144 0.49956 5.08107 0.642749 5.01829 0.862494C4.65415 2.13698 3.81192 3.18361 2.87485 3.9817C1.93768 4.77989 0.938507 5.30106 0.323485 5.53169C0.126512 5.60555 0.00356666 5.79041 -0.000958744 5.9886C-0.00623379 6.2107 0.138093 6.41701 0.36167 6.48089C1.63616 6.84503 2.68278 7.68726 3.48088 8.62433C4.27906 9.5615 4.80023 10.5607 5.03087 11.1757C5.10243 11.3665 5.27819 11.4879 5.46931 11.4994C5.48857 11.5005 5.50799 11.5006 5.52748 11.4995C5.71919 11.4885 5.8957 11.367 5.96746 11.1757C6.19809 10.5607 6.71926 9.5615 7.51744 8.62433C8.31554 7.68726 9.36216 6.84503 10.6367 6.48089Z"
          fill="currentcolor"
        />
      </svg>
    </div>
  );
}
