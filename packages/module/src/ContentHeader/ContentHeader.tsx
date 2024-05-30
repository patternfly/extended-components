import React from 'react';
import {
  Flex,
  FlexItem,
  Split,
  SplitItem,
  Text,
  PageSection,
  TextContent,
  Button,
  ButtonVariant,
  ButtonProps,
  Divider,
  Label,
  Icon,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

export interface PageHeaderLinkProps extends ButtonProps {
  /** Title for the link */
  label: string;
  /** Indicates if the link points to an external page */
  isExternal?: boolean;
}

export interface ContentHeaderProps {
  /** Title for content header */
  title: string;
  /** Subtitle for content header */
  subtitle: string;
  /** Optional link below subtitle */
  linkProps?: PageHeaderLinkProps;
  /** Optional icon for content header (appears to the left of the content header's title with a divider) */
  icon?: React.ReactNode;
  /** Optional label for content header (appears to the right of the content header's title) */
  label?: React.ReactNode;
  /** Breadcrumbs component */
  breadcrumbs?: React.ReactNode;
  /** Menu that appears to the far right of the title */
  actionMenu?: React.ReactNode;
  /** Custom OUIA ID */
  ouiaId?: string | number;
}

export const ContentHeader: React.FunctionComponent<React.PropsWithChildren<ContentHeaderProps>> = ({
  title,
  subtitle,
  linkProps,
  icon,
  label,
  breadcrumbs = null,
  actionMenu,
  ouiaId = 'ContentHeader',
}: ContentHeaderProps) => (
  <PageSection variant="light" className='pf-v5-u-p-md'>
    <div className="pf-v5-u-mb-md">
      {breadcrumbs}
    </div>
    <Flex>
      {icon && (
        <>
          <FlexItem>
            <Icon size="lg">
              {icon}
            </Icon>
          </FlexItem>
          <Divider orientation={{
            default: 'vertical',
          }} />
        </>
      )}
      <FlexItem flex={{ default: 'flex_1' }}>
        <Split hasGutter>
          <SplitItem>
            <TextContent>
              <Text component="h1" ouiaId={`${ouiaId}-title`}>
                {title}
              </Text>
            </TextContent>
          </SplitItem>
          {label && (
            <SplitItem>
              <Label className='pf-v5-u-mb-md' isCompact>
                {label}
              </Label>
            </SplitItem>
          )}
          <SplitItem isFilled />
          {actionMenu && (
            <SplitItem>
              {actionMenu}
            </SplitItem>
          )}
        </Split>
        <TextContent>
          <Text component="p" ouiaId={`${ouiaId}-subtitle`}>
            {subtitle}
          </Text>
          {linkProps && (
            <Button variant={ButtonVariant.link} ouiaId={`${ouiaId}-link-button`} isInline icon={linkProps.isExternal ? <ExternalLinkAltIcon /> : null} iconPosition="end" {...linkProps}>
              {linkProps.label}
            </Button>
          )}
        </TextContent>
      </FlexItem>
    </Flex>
  </PageSection>
);

export default ContentHeader;
