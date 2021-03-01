import { animate, keyframes, state, style, transition, trigger } from "@angular/animations"

export interface AnimationState {
    [state: string]: any
}
export interface AnimationTransition {
    expression: string,
    animate: string,
    keyframes?: any[]
}
export interface TriggerDefinition {
    states?: AnimationState,
    transitions?: AnimationTransition[]
}
export interface Animation {
    [trigger: string]: TriggerDefinition
}
export function animationBuilder(animation: Animation) {
    return Object.keys(animation).map(t => {
        return trigger(t, [
            ...Object.keys(animation[t].states).map(x => state(x, style(animation[t].states[x]))),
            ...animation[t].transitions.map(x => transition(x.expression, animate(x.animate, keyframes((x.keyframes || []).map(z => style(z))))))
        ])
    })
}