import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '../../../components/Checkbox';
import Select from '../../../components/Select';
import { selectOptions } from '../../../store/options/selectors';
import { optionsScriptsToggle, optionsThemesSet } from '../../../store/options/actions';

export default function OptionsPane() {
  const dispatch = useDispatch();
  const options = useSelector(selectOptions);

  return (
    <div>
      <h5>Scripts</h5>
      <Checkbox
        label="Auto Accept Unchecker"
        checked={options.scripts.autoAcceptUnchecker}
        onChange={() => dispatch(optionsScriptsToggle('autoAcceptUnchecker'))}
      />
      <Checkbox
        label="Blocks"
        checked={options.scripts.blocks}
        onChange={() => dispatch(optionsScriptsToggle('blocks'))}
      />
      <Checkbox
        label="Confirm Return Hit"
        checked={options.scripts.confirmReturnHit}
        onChange={() => dispatch(optionsScriptsToggle('confirmReturnHit'))}
      />
      <Checkbox
        label="HIT Tracker"
        checked={options.scripts.hitTracker}
        onChange={() => dispatch(optionsScriptsToggle('hitTracker'))}
      />
      <Checkbox
        label="Pagination Last Page"
        checked={options.scripts.paginationLastPage}
        onChange={() => dispatch(optionsScriptsToggle('paginationLastPage'))}
      />
      <Checkbox
        label="Project Share"
        checked={options.scripts.projectShare}
        onChange={() => dispatch(optionsScriptsToggle('projectShare'))}
      />
      <Checkbox
        label="Queue Info Enhancer"
        checked={options.scripts.queueInfoEnhancer}
        onChange={() => dispatch(optionsScriptsToggle('queueInfoEnhancer'))}
      />
      <Checkbox
        label="Rate Limit Reloader"
        checked={options.scripts.rateLimitReloader}
        onChange={() => dispatch(optionsScriptsToggle('rateLimitReloader'))}
      />
      <Checkbox
        label="Requester Info"
        checked={options.scripts.requesterInfo}
        onChange={() => dispatch(optionsScriptsToggle('requesterInfo'))}
      />
      <Checkbox
        label="Turkerview"
        checked={options.scripts.turkerview}
        onChange={() => dispatch(optionsScriptsToggle('turkerview'))}
      />
      <Checkbox
        label="Turkopticon"
        checked={options.scripts.turkopticon}
        onChange={() => dispatch(optionsScriptsToggle('turkopticon'))}
      />
      <Checkbox
        label="Workspace Expander"
        checked={options.scripts.workspaceExpander}
        onChange={() => dispatch(optionsScriptsToggle('workspaceExpander'))}
      />
      <Select
        label="MTurk Suite Theme"
        onChange={(event) => dispatch(optionsThemesSet({ mts: event.currentTarget.value as any }))}
        value={options.themes.mts}
      >
        <option value="default">default</option>
        <option value="darkly">darkly</option>
        <option value="flatly">flatly</option>
      </Select>
    </div>
  );
}