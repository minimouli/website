/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface GithubIconProps {
    className: string
}

const GithubIcon = ({ className }: GithubIconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.295883C5.374 0.295883 0 5.66888 0 12.2959C0 17.5979 3.438 22.0959 8.207 23.6829C8.806 23.7939 9 23.4219 9 23.1059V20.8719C5.662 21.5979 4.967 19.4559 4.967 19.4559C4.421 18.0689 3.634 17.6999 3.634 17.6999C2.545 16.9549 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.556 18.2079 5.556 18.2079C6.626 20.0419 8.363 19.5119 9.048 19.2049C9.155 18.4299 9.466 17.8999 9.81 17.6009C7.145 17.2959 4.343 16.2669 4.343 11.6699C4.343 10.3589 4.812 9.28888 5.579 8.44888C5.455 8.14588 5.044 6.92488 5.696 5.27288C5.696 5.27288 6.704 4.95088 8.997 6.50288C9.954 6.23688 10.98 6.10388 12 6.09888C13.02 6.10388 14.047 6.23688 15.006 6.50288C17.297 4.95088 18.303 5.27288 18.303 5.27288C18.956 6.92588 18.545 8.14688 18.421 8.44888C19.191 9.28888 19.656 10.3599 19.656 11.6699C19.656 16.2789 16.849 17.2939 14.177 17.5909C14.607 17.9629 15 18.6929 15 19.8129V23.1059C15 23.4249 15.192 23.7999 15.801 23.6819C20.566 22.0929 24 17.5959 24 12.2959C24 5.66888 18.627 0.295883 12 0.295883Z" />
    </svg>
)

export {
    GithubIcon
}
