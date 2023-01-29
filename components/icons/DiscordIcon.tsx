/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface DiscordIconProps {
    className: string
}

const DiscordIcon = ({ className }: DiscordIconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M20.3303 4.52336C18.7535 3.80145 17.0889 3.2893 15.3789 3C15.1449 3.41829 14.9332 3.84865 14.7447 4.28929C12.9233 4.01482 11.071 4.01482 9.24963 4.28929C9.06097 3.8487 8.84926 3.41834 8.61537 3C6.90435 3.29175 5.23861 3.80511 3.6602 4.52714C0.526645 9.16328 -0.322812 13.6843 0.101917 18.1411C1.937 19.4969 3.99099 20.5281 6.17459 21.1897C6.66628 20.5284 7.10135 19.8269 7.47521 19.0925C6.76512 18.8273 6.07977 18.5001 5.42707 18.1147C5.59885 17.9901 5.76685 17.8617 5.92919 17.7371C7.82839 18.6303 9.90126 19.0934 12 19.0934C14.0987 19.0934 16.1716 18.6303 18.0708 17.7371C18.235 17.8712 18.403 17.9995 18.5729 18.1147C17.9189 18.5007 17.2323 18.8285 16.521 19.0944C16.8944 19.8284 17.3295 20.5294 17.8216 21.1897C20.0071 20.5307 22.0626 19.5001 23.898 18.143C24.3964 12.9745 23.0467 8.49504 20.3303 4.52336ZM8.0132 15.4002C6.82962 15.4002 5.8518 14.3261 5.8518 13.0047C5.8518 11.6833 6.79564 10.5998 8.00942 10.5998C9.2232 10.5998 10.1935 11.6833 10.1727 13.0047C10.1519 14.3261 9.21943 15.4002 8.0132 15.4002ZM15.9868 15.4002C14.8013 15.4002 13.8273 14.3261 13.8273 13.0047C13.8273 11.6833 14.7711 10.5998 15.9868 10.5998C17.2024 10.5998 18.1652 11.6833 18.1444 13.0047C18.1236 14.3261 17.193 15.4002 15.9868 15.4002Z" />
    </svg>
)

export {
    DiscordIcon
}