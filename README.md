# Deck of Cards API Wrapper

This wrap requests from the [deck of cards API](https://github.com/crobertsbmw/deckofcards), to apply an open Access-Control-Allow-Origin header. That way, requests to the original API can occur while in
development, without browser same-origin-policy issues.


## This API wrapper supports two requests:

#### Get a new shuffled deck:
* [https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle](https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle)

#### Draw a card from an existing deck:
* [https://deck-of-cards-api-wrapper.appspot.com/deck/:deck-id/draw](https://deck-of-cards-api-wrapper.appspot.com/deck/:deck-id/draw)

