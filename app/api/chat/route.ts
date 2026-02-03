import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "消息内容不能为空" },
        { status: 400 }
      );
    }

    const appId = process.env.BAILIAN_APP_ID;
    const apiKey = process.env.BAILIAN_API_KEY;

    if (!appId || !apiKey) {
      console.error("百炼API配置缺失", { appId: !!appId, apiKey: !!apiKey });
      return NextResponse.json(
        { error: "服务配置错误，请联系管理员" },
        { status: 500 }
      );
    }

    const endpoint = `https://dashscope.aliyuncs.com/api/v1/apps/${appId}/completion`;

    console.log("调用百炼API", { endpoint, appId, messageLength: message.length });

    // 调用百炼智能体API（普通模式，不使用流式）
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: {
          prompt: message,
          history: [],
        },
        parameters: {
          max_tokens: 2000,
          temperature: 0.7,
          top_p: 0.9,
        },
      }),
    });

    console.log("百炼API响应状态", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("百炼API调用失败", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      return NextResponse.json(
        { error: `AI服务错误: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("百炼API返回数据", JSON.stringify(data, null, 2));

    // 根据百炼API返回格式提取回复
    let reply = "";

    if (data.output && data.output.text) {
      reply = data.output.text;
    } else if (data.output && data.output.content) {
      reply = data.output.content;
    } else if (data.text) {
      reply = data.text;
    } else if (data.content) {
      reply = data.content;
    } else {
      console.error("无法解析百炼API返回", data);
      reply = "抱歉，我没有理解您的问题。请尝试换种方式提问，或联系尚瑾瑜：shangjinyu_2012@foxmail.com";
    }

    console.log("AI回复长度", reply.length);

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("聊天API错误", error);
    return NextResponse.json(
      { error: "服务内部错误，请稍后再试" },
      { status: 500 }
    );
  }
}
