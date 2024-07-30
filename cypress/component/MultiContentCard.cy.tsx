import React from 'react';
import MultiContentCard from "@patternfly/react-component-groups/dist/dynamic/MultiContentCard";
import { Button, Card, CardHeader, CardBody, Content, ContentVariants, Icon, List, ListItem, CardFooter } from '@patternfly/react-core';
import { ArrowRightIcon, BellIcon, CogIcon, LockIcon } from '@patternfly/react-icons';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
  action: {
    color: 'var(--pf-t--color--blue--60)',
    fontSize: 'var(--pf-t--global--font--size--200)',
  }, 
  bulletPoints: {
    color: 'var(--pf-t--global--color--brand--default)',
  },
});

export const MultiContentCardExample: React.FunctionComponent = () => {
  const classes = useStyles();
  
  const cards = [
    <Card isFullHeight isPlain key="card-1">
      <CardHeader>
        <Content component={ContentVariants.h4}>Getting Started</Content>
      </CardHeader>
      <CardBody>
        <Content className={clsx(classes.action, 'pf-v6-u-font-weight-bold', 'pf-v6-u-mb-sm')}>
          <Icon size="md" className="pf-v6-u-pl-sm pf-v6-u-pr-md">
            <CogIcon />
          </Icon>
            Configure application
        </Content>
        <Content className="pf-v6-u-font-size-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Content>
      </CardBody>
      <CardFooter>
        <List className={clsx(classes.bulletPoints, 'pf-v6-u-font-size-sm', 'pf-v6-u-ml-0')}>
          <ListItem>
            <Button variant="link" isInline>First link</Button>
          </ListItem>
          <ListItem>
            <Button variant="link" isInline>Second link</Button>
          </ListItem>
          <ListItem>
            <Button variant="link" isInline>Another link</Button>
          </ListItem>
        </List>
      </CardFooter>
    </Card>,
    <Card isFullHeight isPlain key="card-2">
      <CardBody className="pf-v6-u-pt-3xl-on-md">
        <Content className={clsx(classes.action, 'pf-v6-u-font-weight-bold', 'pf-v6-u-mb-sm')}>
          <Icon size="md" className="pf-v6-u-pl-sm pf-v6-u-pr-md">
            <LockIcon />
          </Icon>
            Configure access
        </Content>
        <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Content>
      </CardBody>
      <CardFooter>
        <Content>
          <Button variant="link" isInline>
              Learn more  
            <Icon className="pf-v6-u-ml-sm" isInline>
              <ArrowRightIcon />
            </Icon>
          </Button>
        </Content>
      </CardFooter>
    </Card>,
    <Card isFullHeight isPlain key="card-3">
      <CardHeader>
        <Content component={ContentVariants.h4}>Next Steps</Content>
      </CardHeader>
      <CardBody>
        <Content className={clsx(classes.action, 'pf-v6-u-font-weight-bold', 'pf-v6-u-mb-sm')}>
          <Icon size="md" className="pf-v6-u-pl-sm pf-v6-u-pr-md">
            <BellIcon />
          </Icon>
            Configure notifications
        </Content>
        <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Content>
      </CardBody>
      <CardFooter>
        <Content>
          <Button variant="link" isInline>
              Learn more  
            <Icon className="pf-v6-u-ml-sm" isInline>
              <ArrowRightIcon />
            </Icon>
          </Button>
        </Content>
      </CardFooter>
    </Card>
  ];

  return (<MultiContentCard cards={cards} />);
}

describe('MultiContentCard', () => {
  it('renders MultiContentCard', () => {
    cy.mount(<MultiContentCardExample />);
    cy.get('[data-ouia-component-id="MultiContentCard"]').should('exist');
  });
});
