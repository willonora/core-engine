// types.ts

// Domain-specific types

export type UserId = string;
export type Username = string;
export type Email = string;
export type PasswordHash = string;

export type GameId = string;
export type GameName = string;
export type PlayerId = string;

export type PlayerState =
  | 'created'
  | 'connected'
  | 'disconnected'
  | 'game-joined'
  | 'game-left'
  | 'game-won'
  | 'game-lost';

export type GameState =
  | 'created'
  | 'waiting'
  | 'started'
  | 'ended'
  | 'won'
  | 'lost';

export type Action =
  | 'game-created'
  | 'player-connected'
  | 'player-disconnected'
  | 'player-joined-game'
  | 'player-left-game'
  | 'game-started'
  | 'game-ended'
  | 'game-won'
  | 'game-lost';