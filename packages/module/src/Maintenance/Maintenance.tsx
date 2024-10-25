import React from 'react';
import { Button, EmptyState, EmptyStateBody, EmptyStateProps, EmptyStateStatus, EmptyStateVariant } from '@patternfly/react-core';
import { HourglassHalfIcon } from '@patternfly/react-icons';

/** extends EmptyStateProps */
export interface MaintenanceProps extends Omit<EmptyStateProps, 'children' | 'title'> {
    /** The title for the maintenance message */
    titleText?: string;
    /** start time for maintenance UTC */
    utcStartTime?: string;
    /** end time for maintenance UTC */
    utcEndTime?: string;
    /** start time in a specific time zone */
    startTime?: string;
    /** end time in a specific time zone */
    endTime?: string;
    /** specify time zone */
    timeZone?: string;
    /** Information link */
    redirectUrl?: string;
     /** Information link title */
    redirectUrlLinkText?: string;
    /** Custom OUIA ID */
    ouiaId?: string | number;  }

const Maintenance: React.FunctionComponent<MaintenanceProps> = ({ 
  titleText = 'Maintenance in progress',
  utcStartTime,
  utcEndTime,
  startTime,
  endTime,
  timeZone,
  redirectUrl = 'https://status.redhat.com',
  redirectUrlLinkText = 'status.redhat.com',
  ouiaId = 'Maintenance',
  ...props 
}: MaintenanceProps) => (
  <EmptyState headingLevel="h5" status={EmptyStateStatus.danger} icon={HourglassHalfIcon}  titleText={titleText} variant={EmptyStateVariant.lg} data-ouia-component-id={ouiaId} {...props}>
    <EmptyStateBody data-ouia-component-id={`${ouiaId}-body`}>
      We are currently undergoing scheduled maintenance and will be unavailable from {utcStartTime} to {utcEndTime} UTC ({startTime}-{endTime} {timeZone}).
      For more information please visit {' '}
      <Button variant='link' component='span' isInline href={redirectUrl} target="_blank" ouiaId={`${ouiaId}-link`}>
        {redirectUrlLinkText}.
      </Button>
    </EmptyStateBody>
  </EmptyState>
);

export default Maintenance;
