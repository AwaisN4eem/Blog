import React from 'react';

const SharePanel = () => {
  const shareBody = "Check out open submission opportunities from Uncharted Mag";

  return (
    <div className="panel panel-last category category-vcenter flex items-center justify-center my-10">
      <div className="inline-block pl-5">
        <div className="share-buttons mt-0">
          <div
            id="sbm-social-icons"
            data-body={shareBody}
            notranslate="true"
          >
            <ul role="list" className="flex space-x-4 items-center justify-center">
              <li role="listitem">
                <a
                  href="#facebook"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#BF0000] transition duration-200"
                  aria-label="Share via Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    className="text-gray-700 hover:text-white"
                  >
                    <title>Share via Facebook</title>
                    <path d="M549.632 338.944c22.477-23.142 107.571-3.43 107.571-3.43l19.098-118.477c0 0-50.432-12.237-126.669-12.237-76.288 0-112.333 26.573-130.714 44.954-18.432 18.381-34.048 61.286-34.048 85.76v123.955h-77.67v113.869h77.67v297.062h151.142v-297.062h114.893l8.192-113.869h-123.085c-0.051-102.656-0.563-105.933 13.619-120.525z" />
                  </svg>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#twitter"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#BF0000] transition duration-200"
                  aria-label="Share via X"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 1024 1024"
                    className="text-gray-700 hover:text-white"
                  >
                    <title>Share via X</title>
                    <path fill="#333" d="M596.009 433.371l372.819-433.371h-88.346l-323.718 376.29-258.553-376.29h-298.21l390.983 569.018-390.983 454.457h88.351l341.855-397.375 273.051 397.375h298.21l-405.458-590.103zM475 574.031l-354.815-507.521h135.702l624.636 893.48h-135.702l-269.821-385.959z" />
                  </svg>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="#linkedin"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#BF0000] transition duration-200"
                  aria-label="Share via LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 1024 1024"
                    className="text-gray-700 hover:text-white"
                  >
                    <title>Share via LinkedIn</title>
                    <path d="M1024 1024h-218.917v-323.962c0-77.239-1.394-176.619-113.744-176.619-113.949 0-131.334 84.18-131.334 171.113v329.468h-218.671v-666.149h209.856v91.082h3.034c29.194-52.385 100.622-107.6 207.108-107.6 221.706 0 262.668 137.921 262.668 317.332v365.335zM102.466 204.8c-56.724 0-102.466-45.868-102.466-102.417 0-56.516 45.743-102.383 102.466-102.383 56.492 0 102.334 45.868 102.334 102.383 0 56.549-45.842 102.417-102.334 102.417v0zM0 341.333h204.8v682.667h-204.8v-682.667z" />
                  </svg>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="mailto:?subject=Check out open submission opportunities from Uncharted Mag&amp;body=https://uncharted.submittable.com/submit"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#BF0000] transition duration-200"
                  aria-label="Share via Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 1024 1024"
                    className="text-gray-700 hover:text-white"
                  >
                    <title>Share via Email</title>
                    <path d="M954.641 201.728h-885.35c-22.596 0-40.96 18.364-40.96 40.96v561.766c0 22.596 18.364 40.96 40.96 40.96h885.419c22.596 0 40.96-18.295 40.96-40.96v-561.766c-0.068-22.665-18.432-40.96-41.028-40.96zM905.626 344.61l-368.026 294.434c-7.441 6.007-16.521 8.943-25.6 8.943s-18.159-2.935-25.6-8.943l-368.026-294.434c-17.613-14.131-20.48-39.936-6.349-57.549 14.336-17.681 40.073-20.48 57.617-6.349l342.357 273.886 342.426-273.954c17.545-14.199 43.349-11.401 57.617 6.349 14.063 17.681 11.196 43.486-6.417 57.617z" />
                  </svg>
                </a>
              </li>
              <li role="listitem">
                <a
                  className="nKx4WjfgsuRueeFQS6Zt flex items-center border-[1px] rounded border-gray-600 pr-1 py-1"
                  type="button"
                  aria-pressed="false"
                  aria-label="Follow Organization"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    className="UzMmTab4rMbleaH3a0sB"
                    role="img"
                    style={{ pointerEvents: 'none' }}
                  >
                    <title>FAVORITE_INACTIVE ICON</title>
                    <g>
                      <path d="M 721.921875 63.148438 L 302.933594 63.148438 L 302.933594 723.503906 L 512.425781 857.703125 L 721.921875 723.503906 Z M 785.066406 758.046875 L 512.425781 932.691406 L 239.785156 758.046875 L 239.785156 0 L 785.066406 0 Z M 785.066406 758.046875" />
                    </g>
                  </svg>
                  <span className="ml-2">Follow</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="follow-button-in-share pull-left"
            data-render-follow-button=""
            data-publisher-id="15094"
            data-email="khahmadalikhan@gmail.com"
            data-first-name="AHMAD"
            data-last-name="ALI"
            notranslate="true"
          >
            {/* Follow button can go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePanel;
