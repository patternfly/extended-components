import React from 'react';
import { Button, EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
  emptyStateUnavailable: {
    color: 'var(--pf-global--danger-color--100)',
    '& svg': { color: 'var(--pf-global--danger-color--100)' }
  },
  emptyStateLinkButton: {
    padding: '0',
  }
});

export interface UnavailableContentProps {
  /** The URL that the status page link points to */
  statusPageUrl?: string;
  /** The text label for the link that points to the status page */
  statusPageLinkText?: string;
  /** The title for the unavailable content message */
  unavailableTitleText?: string;
  /** The body text for the unavailable content message that appears before the status page link */
  unavailableBodyPreStatusLinkText?: string;
  /** The body text for the unavailable content message that appears after the status page link */
  unavailableBodyPostStatusLinkText?: string;
  /** Custom OUIA ID */
  ouiaId?: string | number;
}

const UnavailableContent: React.FunctionComponent<UnavailableContentProps> = ({ 
  statusPageUrl = '',
  statusPageLinkText = 'status page',
  unavailableTitleText = 'This page is temporarily unavailable',
  unavailableBodyPreStatusLinkText = 'Try refreshing the page. If the problem persists, contact your organization administrator or visit our',
  unavailableBodyPostStatusLinkText = 'for known outages.',
  ouiaId = 'UnavailableContent',
  ...props 
}: UnavailableContentProps) => {
  const classes = useStyles();
  return (
    <EmptyState variant={EmptyStateVariant.lg} className={clsx(classes.emptyStateUnavailable)} data-ouia-component-id={ouiaId} {...props}>
      <EmptyStateHeader titleText={unavailableTitleText} icon={<EmptyStateIcon icon={ExclamationCircleIcon} data-ouia-component-id={`${ouiaId}-icon`} />} data-ouia-component-id={`${ouiaId}-header`} headingLevel="h5" />
      <EmptyStateBody data-ouia-component-id={`${ouiaId}-body`}>
        {unavailableBodyPreStatusLinkText}{' '}
        <Button component='a' className={clsx(classes.emptyStateLinkButton)} variant='link' href={statusPageUrl} target="_blank" rel="noopener noreferrer" ouiaId={`${ouiaId}-link-button`}>
          {statusPageLinkText}
        </Button>{' '}
        {unavailableBodyPostStatusLinkText}
      </EmptyStateBody>
    </EmptyState>
  );
};

export default UnavailableContent;
