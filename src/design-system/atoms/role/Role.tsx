import chroma from 'chroma-js';
import * as React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Role as RPCRole, RoleSafety } from 'roleypoly/common/types';
import { evaluatePermission, permissions } from 'roleypoly/common/utils/hasPermission';
import { numberToChroma } from 'roleypoly/design-system/atoms/colors';
import * as styled from './Role.styled';

type Props = {
    role: RPCRole;
    selected: boolean;
    disabled?: boolean;
    onClick?: (newState: boolean) => void;
    tooltipId?: string;
    type?: 'delete';
};

export const Role = (props: Props) => {
    const colorVars = {
        '--role-color': 'white',
        '--role-contrast': 'hsl(0,0,0%)',
        '--role-accent': 'hsl(0,0,70%)',
    };

    if (props.role.color !== 0) {
        const baseColor = numberToChroma(props.role.color);
        const contrastColorUp = baseColor.brighten(5);
        const contrastColorDown = baseColor.darken(5);
        const ratio = chroma.contrast(contrastColorDown, baseColor);
        const contrastColor = ratio > 2 ? contrastColorDown : contrastColorUp;
        const accentColor = ratio > 2 ? baseColor.darken(2) : baseColor.brighten(2);
        colorVars['--role-color'] = baseColor.css();
        colorVars['--role-accent'] = accentColor.css();
        colorVars['--role-contrast'] = contrastColor.css();
    }

    const styledProps: styled.StyledProps = {
        selected: props.selected,
        defaultColor: props.role.color === 0,
        disabled: !!props.disabled,
        type: props.type,
    };

    const extra = !props.disabled
        ? {}
        : {
              'data-tip': disabledReason(props.role),
              'data-for': props.tooltipId,
          };

    return (
        <styled.Outer
            {...styledProps}
            style={colorVars as any}
            onClick={() => !props.disabled && props.onClick?.(!props.selected)}
            {...extra}
        >
            <styled.Circle {...styledProps}>
                {!props.disabled && props.type !== 'delete' ? <FaCheck /> : <FaTimes />}
            </styled.Circle>
            <styled.Text>{props.role.name}</styled.Text>
        </styled.Outer>
    );
};

const disabledReason = (role: RPCRole) => {
    switch (role.safety) {
        case RoleSafety.HigherThanBot:
            return `This role is above Roleypoly's own role.`;
        case RoleSafety.DangerousPermissions:
            const rolePermissions = BigInt(role.permissions);
            let permissionHits: string[] = [];

            evaluatePermission(rolePermissions, permissions.ADMINISTRATOR) &&
                permissionHits.push('Administrator');
            evaluatePermission(rolePermissions, permissions.MANAGE_ROLES) &&
                permissionHits.push('Manage Roles');

            return `This role has unsafe permissions: ${permissionHits.join(', ')}`;
        default:
            return `This role is disabled.`;
    }
};
