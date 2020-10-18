---
to: <%= out %>/<%= name %>/<%= name %>.tsx
---
import React from 'react';

import { IProps } from './<%= name %>.types'
import './<%= name %>.scss'

const <%= h.inflection.classify(name.replace(/-/g, '_')) %> = (props: IProps) => (
    <div><%= h.inflection.titleize(name.replace(/-/g, '_')) %></div>
);

export default <%= h.inflection.classify(name.replace(/-/g, '_')) %>;