export default {
  "workbench": {
    "id": "@cosmic/modules/workbench",
    "type": "col",
    "minWidth": 1280,
    "scale": [20, 40, 20, 20],
    "modules": [
      {
        "id": "@cosmic/modules/resource-explorer"
      }
      // {
      //   "id": "modules/shape-canvas"
      // },
      // {
      //   "id": "modules/property-panel"
      // },
      // {
      //   "id": "modules/workbench",
      //   "type": "row",
      //   "minWidth": 1280,
      //   "scale": [20, 60, 20],
      //   "modules": [
      //     {
      //       "id": "modules/resource-explorer"
      //     },
      //     {
      //       "id": "modules/shape-canvas"
      //     },
      //     {
      //       "id": "modules/property-panel"
      //     }
      //   ]
      // }
    ]
  },
  "menu": {
    "title": "文件",
    "items": [
      {
        "title": "打开文件",
        "type": "group"
      },
      {
        "title": "保存",
        "type": "group"
      },
      {
        "title": "另存为",
        "type": "group"
      }
    ]
  }
}
