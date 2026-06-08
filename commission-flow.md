graph TD
    %% 样式与配色定义 (Tech Palette)
    classDef timeline fill:#fff3e0,stroke:#ffe0b2,stroke-width:2px,stroke-dasharray: 5 5;
    classDef requester fill:#e3f2fd,stroke:#90caf9,stroke-width:2px;
    classDef cbbi fill:#f3e5f5,stroke:#ce93d8,stroke-width:2px;
    classDef approver fill:#ffebee,stroke:#ef9a9a,stroke-width:2px;
    classDef note fill:#fffde7,stroke:#fff59d,stroke-width:1.5px;

    %% 泳道 1: Pre-preparation & Timeline
    subgraph Lane0 [📅 Pre-preparation & Timeline]
        T1["⏳ <b>Before the 20th</b><br>(Cut-off: last working date by 20th)"]:::timeline
        T2["⏳ <b>Between 20th and 25th</b><br>(Cut-off: last working date by 25th)"]:::timeline
        T3["⏳ <b>End of Month</b><br>(Cut-off: second last working date by EOM)"]:::timeline
        Step0["<b>Step 0</b><br>CB BI to remind market PIC to submit any new / existing commission for upcoming cycle via email"]:::cbbi
    end

    %% 泳道 2: Special Commission Requester
    subgraph Lane1 [👤 Special Commission Requester]
        Step1["<b>Step 1</b><br>Propose special request via email"]:::requester
        Step2["<b>Step 2</b><br>Submit updated M+1 target & shop list via Google form"]:::requester
        Step5["<b>Step 5</b><br>Revise program / shop list if program / shops are underperforming based on assessment"]:::requester
        Step7["<b>Step 7</b><br>Re-submit special request if there is any changes to the M+1 targets / shop list in Google form"]:::requester
    end

    %% 泳道 3: CB BI
    subgraph Lane2 [📊 CB BI Cross-Border Business Intelligence]
        Step3["<b>Step 3</b><br>Review KPI and configuration feasibility<br>(e.g., timing, rate, system capability etc.)"]:::cbbi
        Step4["<b>Step 4</b><br>Provide performance assessment outcome & summary to requestor"]:::cbbi
        Step8["<b>Step 8</b><br>Configure rates for all special requests"]:::cbbi
        Step9["<b>Step 9</b><br>Monitor program KPI run rate<br>🏁 <i>[End of Process]</i>"]:::cbbi
    end

    %% 泳道 4: Approver
    subgraph Lane3 [🔒 Approver]
        Step6["<b>Step 6</b><br>Seek management approval via email with performance summary provided<br>(Approvers: SN & JH, cc CBBI)"]:::approver
        Note6["⚠️ <b>Key change:</b><br>For SG & MY shops, required to get local approval first"]:::note
    end

    %% 流程连接逻辑
    T1 --> Step0
    Step0 --> Step1
    Step1 --> Step2
    Step2 --> T2
    T2 --> Step3
    Step3 --> Step4
    Step4 --> Step5
    
    %% 分流逻辑
    Step5 --> Step6
    Step5 --> Step7
    
    %% 注释与后续连接
    Step6 -.-> Note6
    Step7 --> T3
    T3 --> Step8
    Step8 --> Step9