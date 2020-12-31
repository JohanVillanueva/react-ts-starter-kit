import React from 'react';
import styled from 'styled-components';
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect';

const StyledTypewriterLabel = styled.div`
  & .Typewriter {
    display: flex;
    font-size: 1.3em;
    color: #00a8e8;
    letter-spacing: 0.1em;
    text-shadow: 0 0 2px white;

    .Typewriter__cursor {
      color: #007ea7;
    }
  }
`;

interface TypewriterLabelProps {
  phrases: Array<string>;
}

const TYPEWRITER_OPTIONS: Options = {
  loop: true,
};

const TypewriterLabel: React.FC<TypewriterLabelProps> = ({ phrases }: TypewriterLabelProps) => {
  const handleOnInitWritter = (typewriter: TypewriterClass) => {
    phrases.map((phrase) => {
      typewriter = typewriter.typeString(phrase).pauseFor(3500).deleteAll(0);
    });

    typewriter.start();
  };

  return (
    phrases && (
      <StyledTypewriterLabel>
        <Typewriter options={TYPEWRITER_OPTIONS} onInit={handleOnInitWritter} />{' '}
      </StyledTypewriterLabel>
    )
  );
};

export default TypewriterLabel;
