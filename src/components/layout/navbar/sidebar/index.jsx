import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import hideOverflowOnBody from '@redux/actions/hideOverflowOnBodyActions';
import Link from 'next/link';
import { XIcon } from '@icons/misc';
import {
  SidebarBackground,
  SidebarPanel,
  CloseButton,
  LinksContainer,
  SubpageLink,
  Label,
  ContactButton,
  StyledSocials,
} from './Sidebar.styles';

export default function Sidebar({
  isOpened,
  handleCloseSidebar,
  paths,
  currPathname,
  handleContactButton,
  socialsLinks,
}) {
  const dispatch = useDispatch();

  const handleClickContactButton = () => {
    handleCloseSidebar();
    handleContactButton();
  };

  useEffect(() => {
    dispatch(hideOverflowOnBody(isOpened));
  }, [dispatch, isOpened]);

  return (
    <>
      {isOpened && <SidebarBackground onClick={handleCloseSidebar} />}
      <SidebarPanel isOpened={isOpened}>
        <CloseButton icon={<XIcon />} onClick={handleCloseSidebar} />
        <LinksContainer>
          {paths.map(({ name, path }) => (
            <Link href={path} key={path} passHref>
              <SubpageLink href pathname={name}>
                <Label isHighlighted={currPathname === path}>{name}</Label>
              </SubpageLink>
            </Link>
          ))}
        </LinksContainer>
        <ContactButton onClick={handleClickContactButton}>Skontaktuj się</ContactButton>
        <StyledSocials socialsLinks={socialsLinks} />
      </SidebarPanel>
    </>
  );
}

Sidebar.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  currPathname: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  handleCloseSidebar: PropTypes.func.isRequired,
  handleContactButton: PropTypes.func.isRequired,
  socialsLinks: PropTypes.shape({}).isRequired,
};
