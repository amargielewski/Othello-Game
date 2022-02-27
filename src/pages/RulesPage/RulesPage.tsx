//styles
import {
  StyledGameObjectText,
  StyledRuleItem,
  StyledRuleNumber,
  StyledRulesListContainer,
  StyledRuleText,
  StyledRuleTitle,
  StyledWrapper,
} from "./RulesPage.styled";

const rules = [
  { text: "Black always moves first.", ruleId: 1 },
  {
    text: "If on your turn you cannot outflank and flip at least one opposing disk, your turn is forfeited and your opponent moves again. However, if a move is available to you, you may not forfeit your turn.",
    ruleId: 2,
  },
  {
    text: "Players may not skip over their own colour disk(s) to outflank an opposing disk.",
    ruleId: 3,
  },
  {
    text: " Disk(s) may only be outflanked as a direct result of a move and must fall in the direct line of the disk placed down.",
    ruleId: 4,
  },
  {
    text: "All disks outflanked in any one move must be flipped, even if it is to the player's advantage not to flip them at all. ",
    ruleId: 5,
  },
  {
    text: "Once a disk is placed on a square, it can never be moved to another square later in the game. ",
    ruleId: 6,
  },
  {
    text: "When it is no longer possible for either player to move, the game is over. Disks are counted and the player with the majority of their colour showing is the winner. It is possible for a game to end before all 64 squares are filled.",
    ruleId: 7,
  },
];

export const RulesPage = () => {
  return (
    <StyledWrapper>
      <StyledRulesListContainer>
        <StyledRuleTitle>othello rules</StyledRuleTitle>
        <StyledGameObjectText>
          The object of the game is to have the majority of your colour discs on
          the board at the end of the game.
        </StyledGameObjectText>
        {rules.map(({ text, ruleId }) => {
          return (
            <StyledRuleItem key={ruleId}>
              <StyledRuleNumber>{ruleId}.</StyledRuleNumber>
              <StyledRuleText>{text}</StyledRuleText>
            </StyledRuleItem>
          );
        })}
      </StyledRulesListContainer>
    </StyledWrapper>
  );
};
