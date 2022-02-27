//styles
import { StyledTitle, StyledWrapper } from "./RulesPage.styled";

export const RulesPage = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Game Rules</StyledTitle>
      <p>1. Black always moves first.</p>
      <p>
        2. If on your turn you cannot outflank and flip at least one opposing
        disk, your turn is forfeited and your opponent moves again. However, if
        a move is available to you, you may not forfeit your turn.
      </p>
      <p>
        3.Players may not skip over their own colour disk(s) to outflank an
        opposing disk.
      </p>

      <p>
        4. Disk(s) may only be outflanked as a direct result of a move and must
        fall in the direct line of the disk placed down. (See Figures 5 and 6).
      </p>
      <p>
        5. All disks outflanked in any one move must be flipped, even if it is
        to the player's advantage not to flip them at all.
      </p>
      <p>
        Once a disk is placed on a square, it can never be moved to another
        square later in the game.
      </p>
      <p>
        {" "}
        When it is no longer possible for either player to move, the game is
        over. Disks are counted and the player with the majority of their colour
        showing is the winner.
      </p>
    </StyledWrapper>
  );
};
