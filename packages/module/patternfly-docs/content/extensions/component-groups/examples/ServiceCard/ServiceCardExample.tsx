import React from 'react';
import ServiceCard from "@patternfly/react-component-groups/dist/dynamic/ServiceCard";
import { Button, ButtonVariant } from '@patternfly/react-core';

export const BasicExample: React.FunctionComponent = () => <ServiceCard 
  title='Example'
  subtitle='A basic example'
  description='This is a basic ServiceCard Example'
  iconUrl='/'
  showDisabledButton={false}
  helperText=''
  learnMoreButton={
    <Button
      variant={ButtonVariant.link}
      component="a"
      isInline
      href="google.com"
    >
        Learn More
    </Button>
  }
  launchButton={
    <Button 
      variant={ButtonVariant.primary}
      isInline
      component="a"
      href="/">
        Launch
    </Button>
  }

/>
