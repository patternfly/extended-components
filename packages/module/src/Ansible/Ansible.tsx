import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

export interface AnsibleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  /** Supported/unsupported variant flag */
  unsupported?: boolean | number;
  /** Ansible icon className */
  className?: string;
  /** Custom OUIA ID */
  ouiaId?: string | number;
}

const useStyles = createUseStyles({
  ansible: {
    '& svg': {
      height: 'var(--pf-t--global--font--size--xl)',
      position: 'relative',
      top: '0.25rem'
    }
  },
  ansibleSupported: {
    '& .st0': {
      fill: 'var(--pf-t--color--blue--40)',
    }
  },
  ansibleUnsupported: {
    '& .st0, .st1, .st2': {
      fill: 'var(--pf-t--color--gray--50)',
      cursor: 'not-allowed',
    }
  } 
})

const Ansible: React.FunctionComponent<AnsibleProps> = ({ unsupported, className, ouiaId = "Ansible-icon", ...props }: AnsibleProps) => {
  const classes = useStyles();
  const ansibleLogoClass = clsx(
    classes.ansible,
    { [classes.ansibleSupported]: !unsupported || unsupported === 0 },
    { [classes.ansibleUnsupported]: unsupported || unsupported === 1 },
    className
  );

  const unsupportedSlash = (
    <React.Fragment>
      <rect
        x="1245.1"
        y="272.4"
        transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 3082.5815 -510.474)"
        className="st0"
        width="803.8"
        height="221.5"
      />
  
      <rect
        x="-279.7"
        y="904"
        transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 2450.9683 1014.3757)"
        className="st1"
        width="2590.2"
        height="221.5"
      />
  
      <rect
        x="17.1"
        y="1620.5"
        transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 1734.4641 2744.1697)"
        className="st0"
        width="563.7"
        height="221.5"
      />
    </React.Fragment>
  );

  return (
    <i className={ansibleLogoClass} title={unsupported ? "Ansible is not supported" : "Ansible supported" } data-ouia-component-id={ouiaId} {...props}>
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 2032 2027.2"
        style={{ enableBackground: 'new 0 0 2032 2027.2' } as React.CSSProperties}
      >
        <path
          className="st0"
          d="M2030.8,1014.8c0,559.2-453.3,1012.4-1012.4,1012.4C459.2,2027.2,5.9,1574,5.9,1014.8
                        C5.9,455.7,459.2,2.4,1018.3,2.4C1577.5,2.4,2030.8,455.7,2030.8,1014.8 M1035.4,620.9l262,646.6L901.7,955.8L1035.4,620.9
                        L1035.4,620.9z M1500.8,1416.5l-403-969.9c-11.5-28-34.5-42.8-62.4-42.8c-28,0-52.7,14.8-64.2,42.8L528.9,1510.4h151.3l175.1-438.6
                        l522.5,422.1c21,17,36.2,24.7,55.9,24.7c39.5,0,74-29.6,74-72.3C1507.7,1439.4,1505.3,1428.3,1500.8,1416.5L1500.8,1416.5z"
        />
        {unsupported ? unsupportedSlash : null}
      </svg>
    </i>
  );
};

export default Ansible;
