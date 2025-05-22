import { z } from "zod";

/**
 * @typedef {"OFFENSIVE" | "OFF_BRAND" | "VIOLENCE" | "NONE"} ModerationCategory
 */
export const MODERATION_CATEGORIES = [
  "OFFENSIVE",
  "OFF_BRAND",
  "VIOLENCE",
  "NONE",
];

export const ModerationCategoryZod = z.enum([...MODERATION_CATEGORIES]);

/**
 * @typedef {"DISCONNECTED" | "CONNECTING" | "CONNECTED"} SessionStatus
 */

/**
 * @typedef {Object} ToolParameterProperty
 * @property {string} type
 * @property {string} [description]
 * @property {string[]} [enum]
 * @property {string} [pattern]
 * @property {Object.<string, ToolParameterProperty>} [properties]
 * @property {string[]} [required]
 * @property {boolean} [additionalProperties]
 * @property {ToolParameterProperty} [items]
 */

/**
 * @typedef {Object} ToolParameters
 * @property {string} type
 * @property {Object.<string, ToolParameterProperty>} properties
 * @property {string[]} [required]
 * @property {boolean} [additionalProperties]
 */

/**
 * @typedef {Object} Tool
 * @property {"function"} type
 * @property {string} name
 * @property {string} description
 * @property {ToolParameters} parameters
 */

/**
 * @typedef {Object} AgentConfig
 * @property {string} name
 * @property {string} publicDescription
 * @property {string} instructions
 * @property {Tool[]} tools
 * @property {Object.<string, Function>} [toolLogic]
 * @property {AgentConfig[] | {name: string, publicDescription: string}[]} [downstreamAgents]
 */

/**
 * @typedef {Object.<string, AgentConfig[]>} AllAgentConfigsType
 */

/**
 * @typedef {Object} GuardrailResultType
 * @property {"IN_PROGRESS" | "DONE"} status
 * @property {string} [testText]
 * @property {ModerationCategory} [category]
 * @property {string} [rationale]
 */

/**
 * @typedef {Object} TranscriptItem
 * @property {string} itemId
 * @property {"MESSAGE" | "BREADCRUMB"} type
 * @property {"user" | "assistant"} [role]
 * @property {string} [title]
 * @property {Object} [data]
 * @property {boolean} expanded
 * @property {string} timestamp
 * @property {number} createdAtMs
 * @property {"IN_PROGRESS" | "DONE"} status
 * @property {boolean} isHidden
 * @property {GuardrailResultType} [guardrailResult]
 */

/**
 * @typedef {Object} Log
 * @property {number} id
 * @property {string} timestamp
 * @property {string} direction
 * @property {string} eventName
 * @property {any} data
 * @property {boolean} expanded
 * @property {string} type
 */

/**
 * @typedef {Object} ServerEvent
 * @property {string} type
 * @property {string} [event_id]
 * @property {string} [item_id]
 * @property {string} [transcript]
 * @property {string} [delta]
 * @property {Object} [session]
 * @property {Object} [item]
 * @property {Object} [response]
 */

/**
 * @typedef {Object} LoggedEvent
 * @property {number} id
 * @property {"client" | "server"} direction
 * @property {boolean} expanded
 * @property {string} timestamp
 * @property {string} eventName
 * @property {Object} eventData
 */

// Zod schema for guardrail output
export const GuardrailOutputZod = z.object({
  moderationRationale: z.string(),
  moderationCategory: ModerationCategoryZod,
});

/**
 * @typedef {z.infer<typeof GuardrailOutputZod>} GuardrailOutput
 */