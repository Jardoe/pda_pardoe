require "minitest/autorun"
require_relative "task_2.rb"
require_relative "card.rb"

class CardGameTest < MiniTest::Test

  def setup()
    @cardGame = CardGame.new
    @card1 = Card.new("Spades", 10)
    @card2 = Card.new("Hearts", 4)
    @card3 = Card.new("Diamonds", 1)
    @cards = [@card1, @card2, @card3]
  end

  def test_check_for_ace__true()
    assert_equal(true, @cardGame.checkForAce(@card3))
  end

  def test_check_for_ace__false()
    assert_equal(false, @cardGame.checkForAce(@card2))
  end

  def test_highest_card()
    assert_equal(@card1, @cardGame.highest_card(@card1, @card2))
  end

  def test_cards_total()
    assert_equal("You have a total of 15", CardGame.cards_total(@cards))
  end
end
