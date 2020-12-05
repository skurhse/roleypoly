import * as React from 'react';
import { GoOrganization } from 'react-icons/go';
import { GuildSlug } from 'roleypoly/common/types';
import { Avatar, utils } from 'roleypoly/design-system/atoms/avatar';
import { SlugContainer, SlugName } from './NavSlug.styled';

type Props = {
    guild: GuildSlug | null;
};

export const NavSlug = (props: Props) => (
    <SlugContainer>
        <Avatar
            src={
                (props.guild && utils.avatarHash(props.guild.id, props.guild.icon)) ||
                undefined
            }
            deliberatelyEmpty={!props.guild}
            size={35}
        >
            {props.guild ? utils.initialsFromName(props.guild.name) : <GoOrganization />}
        </Avatar>
        <SlugName>{props.guild?.name || <>Your Guilds</>}</SlugName>
    </SlugContainer>
);
