# Deck of Cards API Wrapper

The original API is found here: [https://github.com/crobertsbmw/deckofcards](https://github.com/crobertsbmw/deckofcards)

The intention of this repo is to wrap requests from the deck of cards API in a
CORS-disabled API. That way, requests to the original API can occur while in
development, without passing the browser same origin security policy.


## This API wrapper supports two requests:

#### Get a new shuffled deck:
* [https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle](https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle)

#### Draw a card from an existing deck:
* [https://deck-of-cards-api-wrapper.appspot.com/deck/:deck-id/draw](https://deck-of-cards-api-wrapper.appspot.com/deck/:deck-id/draw)

