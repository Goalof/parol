import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Section>
			<Components.Timer />
		</Section>
	</Theme>;
});