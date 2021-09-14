import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import hideOverflowOnBody from '@root/redux/actions/hideOverflowOnBodyActions';
import Link from 'next/link';
import { XIcon } from '@root/components/Generic/icons/misc';
import {
  SidebarContainer,
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
  handleContactFormButton,
  socialsLinks,
}) {
  const dispatch = useDispatch();

  const handleClickContactButton = () => {
    handleCloseSidebar();
    handleContactFormButton();
  };

  useEffect(() => {
    dispatch(hideOverflowOnBody(isOpened));
  }, [dispatch, isOpened]);

  return (
    <SidebarContainer isOpened={isOpened}>
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
    </SidebarContainer>
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
  handleContactFormButton: PropTypes.func.isRequired,
  socialsLinks: PropTypes.shape({}).isRequired,
};
