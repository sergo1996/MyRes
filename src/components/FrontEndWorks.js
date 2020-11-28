import React from "react";

import { motion } from "framer-motion";

export default function FrontEndWorks({ works }) {
  return (
    <div className="front-end">
      <div className="front-end__inner">
        {works.map((work, index) => {
          return (
            <div key={index} className="card">
              <div className="card__title">{work.title}</div>
              <div className="card__image--cont">
                <div className="card__overlay">
                  {work.url ? (
                    <motion.div
                      whileHover={{ scale: 1.4 }}
                      className="card__overlay--btn"
                    >
                      <a
                        className="card__overlay--btn-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={work.url}
                      >
                        <svg
                          width="65"
                          height="65"
                          viewBox="0 0 22 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M18.5625 15H17.1875C17.0052 15 16.8303 15.079 16.7014 15.2197C16.5724 15.3603 16.5 15.5511 16.5 15.75V21H2.75V6H8.9375C9.11984 6 9.2947 5.92098 9.42364 5.78033C9.55257 5.63968 9.625 5.44891 9.625 5.25V3.75C9.625 3.55109 9.55257 3.36032 9.42364 3.21967C9.2947 3.07902 9.11984 3 8.9375 3H2.0625C1.51549 3 0.990886 3.23705 0.604092 3.65901C0.217298 4.08097 0 4.65326 0 5.25L0 21.75C0 22.3467 0.217298 22.919 0.604092 23.341C0.990886 23.7629 1.51549 24 2.0625 24H17.1875C17.7345 24 18.2591 23.7629 18.6459 23.341C19.0327 22.919 19.25 22.3467 19.25 21.75V15.75C19.25 15.5511 19.1776 15.3603 19.0486 15.2197C18.9197 15.079 18.7448 15 18.5625 15ZM20.9688 0H15.4688C14.5505 0 14.0916 1.21453 14.7383 1.92188L16.2736 3.59672L5.80078 15.0173C5.70464 15.1219 5.62836 15.2461 5.57631 15.3828C5.52426 15.5195 5.49747 15.6662 5.49747 15.8142C5.49747 15.9623 5.52426 16.1089 5.57631 16.2456C5.62836 16.3824 5.70464 16.5066 5.80078 16.6111L6.77488 17.6719C6.87069 17.7768 6.98453 17.86 7.10988 17.9168C7.23523 17.9735 7.36962 18.0028 7.50535 18.0028C7.64108 18.0028 7.77547 17.9735 7.90082 17.9168C8.02617 17.86 8.14001 17.7768 8.23582 17.6719L18.7034 6.24938L20.2383 7.92188C20.8828 8.625 22 8.13281 22 7.125V1.125C22 0.826631 21.8914 0.540483 21.698 0.329505C21.5046 0.118526 21.2423 0 20.9688 0V0Z"
                              fill="#15ff00"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width="22" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </motion.div>
                  ) : null}
                  {work.code ? (
                    <motion.div
                      whileHover={{ scale: 1.4 }}
                      className="card__overlay--btn"
                    >
                      <a
                        className="card__overlay--btn-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={work.code}
                      >
                        <svg
                          width="65"
                          height="65"
                          viewBox="0 0 23 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3358 24.3732L8.23893 23.5435C8.01893 23.4591 7.89518 23.145 7.95706 22.845L12.6492 0.804416C12.7111 0.504416 12.9414 0.335666 13.1614 0.420041L15.2583 1.24973C15.4783 1.3341 15.602 1.64817 15.5402 1.94817L10.848 23.9888C10.7827 24.2888 10.5558 24.4622 10.3358 24.3732ZM6.41706 19.1138L7.91237 16.9388C8.0705 16.7091 8.06018 16.3435 7.88487 16.1325L4.7705 12.3966L7.88487 8.66067C8.06018 8.44973 8.07393 8.0841 7.91237 7.85442L6.41706 5.67942C6.26237 5.45442 6.00112 5.44035 5.83269 5.65598L0.879256 11.9841C0.703944 12.2044 0.703944 12.5841 0.879256 12.8044L5.83269 19.1372C6.00112 19.3529 6.26237 19.3435 6.41706 19.1138ZM17.6645 19.1419L22.618 12.8091C22.7933 12.5888 22.7933 12.2091 22.618 11.9888L17.6645 5.65129C17.4995 5.44035 17.2383 5.44973 17.0802 5.67473L15.5849 7.84973C15.4267 8.07942 15.437 8.44504 15.6124 8.65598L18.7267 12.3966L15.6124 16.1325C15.437 16.3435 15.4233 16.7091 15.5849 16.9388L17.0802 19.1138C17.2349 19.3435 17.4961 19.3529 17.6645 19.1419Z"
                            fill="#15ff00"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  ) : null}
                </div>
                <img
                  className="card__image"
                  alt={work.title}
                  src={work.image}
                />
              </div>
              <p className="card__stack">{work.stack}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
