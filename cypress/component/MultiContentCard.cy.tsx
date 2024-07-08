import React from 'react';
import MultiContentCard, { MultiContentCardBorderVariant } from "@patternfly/react-component-groups/dist/dynamic/MultiContentCard";
import { Button, Card, CardHeader, CardBody, Text, TextContent, TextVariants, Icon, TextList, TextListItem, CardFooter, Divider, Dropdown, DropdownItem, DropdownList, MenuToggle, MenuToggleElement } from '@patternfly/react-core';
import { ArrowRightIcon, BellIcon, CogIcon, LockIcon, EllipsisVIcon } from '@patternfly/react-icons';


const cards = [
  <Card isFullHeight isPlain key="card-1">
    <CardHeader>
      <TextContent>
        <Text component={TextVariants.h4}>Getting Started</Text>
      </TextContent>
    </CardHeader>
    <CardBody>
      <TextContent>
        <Text className="pf-v5-u-font-size-sm pf-v5-u-font-weight-bold pf-v5-u-mb-sm pf-v5-u-link-color-hover">
          <Icon size="md" className="pf-v5-u-pl-sm pf-v5-u-pr-md">
            <CogIcon />
          </Icon>
          Configure application
        </Text>
        <Text className="pf-v5-u-font-size-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </TextContent>
    </CardBody>
    <CardFooter>
      <TextContent>
        <TextList className="pf-v5-u-font-size-sm pf-v5-u-link-color pf-v5-u-ml-0">
          <TextListItem>
            <Button variant="link" isInline>First link</Button>
          </TextListItem>
          <TextListItem>
            <Button variant="link" isInline>Second link</Button>
          </TextListItem>
          <TextListItem>
            <Button variant="link" isInline>Another link</Button>
          </TextListItem>
        </TextList>
      </TextContent>
    </CardFooter>
  </Card>,
  <Card isFullHeight isPlain key="card-2">
    <CardBody className="pf-v5-u-pt-3xl-on-md">
      <TextContent>
        <Text className="pf-v5-u-font-size-sm pf-v5-u-font-weight-bold pf-v5-u-mb-sm pf-v5-u-link-color-hover">
          <Icon size="md" className="pf-v5-u-pl-sm pf-v5-u-pr-md">
            <LockIcon />
          </Icon>
          Configure access
        </Text>
        <Text className="pf-v5-u-font-size-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </TextContent>
    </CardBody>
    <CardFooter>
      <Text>
        <Button variant="link" isInline>
            Learn more  
          <Icon className="pf-u-ml-sm" isInline>
            <ArrowRightIcon />
          </Icon>
        </Button>
      </Text>
    </CardFooter>
  </Card>,
  <Card isFullHeight isPlain key="card-3">
    <CardHeader>
      <TextContent>
        <Text component={TextVariants.h4}>Next Steps</Text>
      </TextContent>
    </CardHeader>
    <CardBody>
      <TextContent>
        <Text className="pf-v5-u-font-size-sm pf-v5-u-font-weight-bold pf-v5-u-mb-sm pf-v5-u-link-color-hover">
          <Icon size="md" className="pf-v5-u-pl-sm pf-v5-u-pr-md">
            <BellIcon />
          </Icon>
          Configure notifications
        </Text>
        <Text className="pf-v5-u-font-size-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </TextContent>
    </CardBody>
    <CardFooter>
      <Text>
        <Button variant="link" isInline>
            Learn more  
          <Icon className="pf-u-ml-sm" isInline>
            <ArrowRightIcon />
          </Icon>
        </Button>
      </Text>
    </CardFooter>
  </Card>
];

const MultiContentCardExample: React.FunctionComponent = () => <MultiContentCard cards={cards}/>;
const HeaderExample: React.FunctionComponent = () => <MultiContentCard isExpandable withHeaderBorder toggleText='Card with border toggle text' leftBorderVariant={MultiContentCardBorderVariant.primary} cards={cards} />


const ActionsExample: React.FunctionComponent = () =>  {
  const [ isMenuOpen, setMenuOpen ] = React.useState(false)

  const onToggleClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <MultiContentCard 
      isExpandable
      toggleText='Card with actions toggle text' 
      cards={cards}
      actions={
        <Dropdown
          isOpen={isMenuOpen}
          onSelect={() => null}
          onOpenChange={(isMenuOpen: boolean) => setMenuOpen(isMenuOpen)}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              aria-label="kebab dropdown toggle"
              variant="plain"
              onClick={onToggleClick}
              isExpanded={isMenuOpen}
            >
              <EllipsisVIcon />
            </MenuToggle>
          )}
          shouldFocusToggleOnSelect
        >
          <DropdownList>
            <DropdownItem value={0} key="action">
            Action
            </DropdownItem>
            <DropdownItem value={1} isDisabled key="disabled action">
            Disabled Action
            </DropdownItem>
            <Divider component="li" key="separator" />
            <DropdownItem value={2} key="separated action">
            Separated Action
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      }
    />
  )
};

describe('MultiContentCard', () => {
  it('renders MultiContentCard', () => {
    cy.mount(<MultiContentCardExample />);
    cy.get('[class="pf-v5-c-card pf-m-expanded"').should('exist');
  });

  it('should display actions', () => {
    cy.mount(<ActionsExample />);
    cy.get('[class="pf-v5-c-menu-toggle pf-m-plain"').should('exist');
    cy.get('[class="pf-v5-c-menu-toggle pf-m-plain"').click();
    cy.get('[class="pf-v5-c-menu"').should('be.visible');
  });

  it('should display borders', () => {
    cy.mount(<HeaderExample />);
    cy.get('[data-ouia-component-id="MultiContentCard"')
      .invoke('attr', 'class')
      .then((classList) => {
        const classes = classList ? classList.split(' ') : [];
        expect('multiContentCardLeftBorder-0-2-2').to.be.oneOf(classes);
      })
  });
});
