import * as React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { Button } from 'roleypoly/src/design-system/atoms/button';
import { Space } from 'roleypoly/src/design-system/atoms/space';
import { PreauthGreeting } from 'roleypoly/src/design-system/molecules/preauth-greeting';
import { PreauthSecretCode } from 'roleypoly/src/design-system/molecules/preauth-secret-code';
import { Guild } from 'roleypoly/src/design-system/shared-types';
import styled from 'styled-components';
import * as _ from 'styled-components'; // eslint-disable-line no-duplicate-imports

export type PreauthProps = {
    guildSlug?: Guild;
    onSendSecretCode: (code: string) => void;
    botName?: string;
};

const Centered = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90vw;
    margin: 0 auto;
`;

const WidthContainer = styled.div`
    width: 20em;
    max-width: 90vw;
`;

export const Preauth = (props: PreauthProps) => {
    return (
        <Centered>
            {props.guildSlug && <PreauthGreeting guildSlug={props.guildSlug} />}
            <WidthContainer>
                <Button
                    color="discord"
                    icon={
                        <div style={{ position: 'relative', top: 3 }}>
                            <FaDiscord />
                        </div>
                    }
                >
                    Sign in with Discord
                </Button>
            </WidthContainer>
            <Space />
            <WidthContainer>
                <p>
                    Or, send a message saying "login" to{' '}
                    <b>{props.botName || 'roleypoly'}</b>
                </p>
                <PreauthSecretCode onSubmit={props.onSendSecretCode} />
            </WidthContainer>
        </Centered>
    );
};
