import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Header from '../common/Header';
import { getDefaultColorMode } from '../common/Toggler';
import './index.scss';

const Layout = ({ location, children }) => {
  // const data = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  // const title = data.site.siteMetadata?.title;

  let headerTitle: JSX.Element;
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const reloadClick = () => window.location.reload();

  if (isRootPath) {
    headerTitle = (
      <div className="logo" onClick={reloadClick}>
        <svg width="36" height="34" viewBox="0 0 76 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M4.16 17.968H23.296C27.904 17.968 31.9787 18.8853 35.52 20.72C39.104 22.5547 41.8773 25.1147 43.84 28.4C45.8453 31.6853 46.848 35.44 46.848 39.664C46.848 44.1013 45.8667 48.0053 43.904 51.376C41.984 54.7467 39.232 57.3707 35.648 59.248C32.1067 61.0827 27.9893 62 23.296 62H4.16V17.968ZM22.656 50.48C25.856 50.48 28.288 49.4773 29.952 47.472C31.6587 45.424 32.512 42.7787 32.512 39.536C32.512 36.464 31.68 34.032 30.016 32.24C28.3947 30.4053 25.9413 29.488 22.656 29.488H18.304V50.48H22.656ZM63.339 62.512C59.755 62.512 56.9603 61.36 54.955 59.056C52.9497 56.752 51.947 53.616 51.947 49.648V29.936H65.515V49.072C65.515 50.0533 65.771 50.8213 66.283 51.376C66.8377 51.888 67.5417 52.144 68.395 52.144C69.2483 52.144 70.123 51.888 71.019 51.376L71.723 60.272C70.7843 60.9973 69.547 61.552 68.011 61.936C66.5177 62.32 64.9603 62.512 63.339 62.512ZM58.731 25.136C56.7257 25.136 55.019 24.5173 53.611 23.28C52.2457 22 51.563 20.4427 51.563 18.608C51.563 16.7733 52.2883 15.2373 53.739 14C55.1897 12.7627 56.8537 12.144 58.731 12.144C60.6937 12.144 62.379 12.784 63.787 14.064C65.2377 15.344 65.963 16.8587 65.963 18.608C65.963 20.4853 65.2377 22.0427 63.787 23.28C62.3363 24.5173 60.651 25.136 58.731 25.136Z"
              fill="#55AF7A"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="76" height="74" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  } else {
    headerTitle = (
      <Link to="/" rel="noreferrer">
        <svg width="36" height="34" viewBox="0 0 76 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M4.16 17.968H23.296C27.904 17.968 31.9787 18.8853 35.52 20.72C39.104 22.5547 41.8773 25.1147 43.84 28.4C45.8453 31.6853 46.848 35.44 46.848 39.664C46.848 44.1013 45.8667 48.0053 43.904 51.376C41.984 54.7467 39.232 57.3707 35.648 59.248C32.1067 61.0827 27.9893 62 23.296 62H4.16V17.968ZM22.656 50.48C25.856 50.48 28.288 49.4773 29.952 47.472C31.6587 45.424 32.512 42.7787 32.512 39.536C32.512 36.464 31.68 34.032 30.016 32.24C28.3947 30.4053 25.9413 29.488 22.656 29.488H18.304V50.48H22.656ZM63.339 62.512C59.755 62.512 56.9603 61.36 54.955 59.056C52.9497 56.752 51.947 53.616 51.947 49.648V29.936H65.515V49.072C65.515 50.0533 65.771 50.8213 66.283 51.376C66.8377 51.888 67.5417 52.144 68.395 52.144C69.2483 52.144 70.123 51.888 71.019 51.376L71.723 60.272C70.7843 60.9973 69.547 61.552 68.011 61.936C66.5177 62.32 64.9603 62.512 63.339 62.512ZM58.731 25.136C56.7257 25.136 55.019 24.5173 53.611 23.28C52.2457 22 51.563 20.4427 51.563 18.608C51.563 16.7733 52.2883 15.2373 53.739 14C55.1897 12.7627 56.8537 12.144 58.731 12.144C60.6937 12.144 62.379 12.784 63.787 14.064C65.2377 15.344 65.963 16.8587 65.963 18.608C65.963 20.4853 65.2377 22.0427 63.787 23.28C62.3363 24.5173 60.651 25.136 58.731 25.136Z"
              fill="#55AF7A"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="76" height="74" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    );
  }

  useEffect(() => {
    const defaultColorMode = getDefaultColorMode();
    document.body.classList.add(defaultColorMode);
  }, []);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header headerTitle={headerTitle} />
      <main className="global-main">{children}</main>
    </div>
  );
};

export default Layout;
