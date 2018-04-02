require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

# Error comments
#5 - should be consistent with function names. checkForAce, highestCard etc.
#11 - correct to "=="
#13  - should say def, rather than dif.
#13 - should be a comma between the arguments e.g. (card1, card2)
#15 - .name isn't an attribute of a card.
#15 - card is not a variable, should be card1
#17 - missing a return statement
#20 - extra end.
#23 - total is not defined. Should say total = 0, or something.
#26 - total could be iterpolated here.
#26 - needs a space after ".. total of ".
#26 - the return statment should be outwith the for-loop.
#29 - missing an end.
